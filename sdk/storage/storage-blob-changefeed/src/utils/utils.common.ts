// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { URLBuilder, AbortSignalLike } from "@azure/core-http";
import { ContainerClient, CommonOptions } from "@azure/storage-blob";
import { CHANGE_FEED_SEGMENT_PREFIX, CHANGE_FEED_INITIALIZATION_SEGMENT } from "./constants";
import { createSpan } from "./tracing";
import { SpanStatusCode } from "@azure/core-tracing";

const millisecondsInAnHour = 60 * 60 * 1000;
export function ceilToNearestHour(date: Date | undefined): Date | undefined {
  if (date === undefined) {
    return undefined;
  }
  return new Date(Math.ceil(date.getTime() / millisecondsInAnHour) * millisecondsInAnHour);
}

export function floorToNearestHour(date: Date | undefined): Date | undefined {
  if (date === undefined) {
    return undefined;
  }
  return new Date(Math.floor(date.getTime() / millisecondsInAnHour) * millisecondsInAnHour);
}

/**
 * Get host from an URL string.
 *
 * @param url - Source URL string
 */
export function getHost(url: string): string | undefined {
  const urlParsed = URLBuilder.parse(url);
  return urlParsed.getHost();
}

/**
 * Get URI from an URL string.
 *
 * @param url - Source URL string
 */
export function getURI(url: string): string {
  const urlParsed = URLBuilder.parse(url);
  return `${urlParsed.getHost()}${urlParsed.getPort()}${urlParsed.getPath()}`;
}

// s[0]*31^(n - 1) + s[1]*31^(n - 2) + ... + s[n - 1]
export function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Bit operation converts operands to 32-bit integers
  }
  return hash;
}

/**
 * Options to configure {@link getYearsPaths} operation.
 */
export interface GetYearsPathsOptions extends CommonOptions {
  /**
   * An implementation of the `AbortSignalLike` interface to signal the request to cancel the operation.
   * For example, use the &commat;azure/abort-controller to create an `AbortSignal`.
   */
  abortSignal?: AbortSignalLike;
}

export async function getYearsPaths(
  containerClient: ContainerClient,
  options: GetYearsPathsOptions = {}
): Promise<number[]> {
  const { span, updatedOptions } = createSpan("getYearsPaths", options);
  try {
    const years: number[] = [];
    for await (const item of containerClient.listBlobsByHierarchy("/", {
      abortSignal: options.abortSignal,
      tracingOptions: updatedOptions.tracingOptions,
      prefix: CHANGE_FEED_SEGMENT_PREFIX,
    })) {
      if (item.kind === "prefix" && !item.name.includes(CHANGE_FEED_INITIALIZATION_SEGMENT)) {
        const yearStr = item.name.slice(CHANGE_FEED_SEGMENT_PREFIX.length, -1);
        years.push(parseInt(yearStr));
      }
    }
    return years.sort((a, b) => a - b);
  } catch (e) {
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: e.message,
    });
    throw e;
  } finally {
    span.end();
  }
}

/**
 * Options to configure {@link getSegmentsInYear} operation.
 */
export interface GetSegmentsInYearOptions extends CommonOptions {
  /**
   * An implementation of the `AbortSignalLike` interface to signal the request to cancel the operation.
   * For example, use the &commat;azure/abort-controller to create an `AbortSignal`.
   */
  abortSignal?: AbortSignalLike;
}

export async function getSegmentsInYear(
  containerClient: ContainerClient,
  year: number,
  startTime?: Date,
  endTime?: Date,
  options: GetSegmentsInYearOptions = {}
): Promise<string[]> {
  const { span, updatedOptions } = createSpan("getSegmentsInYear", options);

  try {
    const segments: string[] = [];
    const yearBeginTime = new Date(Date.UTC(year, 0));
    if (endTime && yearBeginTime >= endTime) {
      return segments;
    }

    const prefix = `${CHANGE_FEED_SEGMENT_PREFIX}${year}/`;
    for await (const item of containerClient.listBlobsFlat({
      prefix,
      abortSignal: options.abortSignal,
      tracingOptions: updatedOptions.tracingOptions,
    })) {
      const segmentTime = parseDateFromSegmentPath(item.name);
      if ((startTime && segmentTime < startTime) || (endTime && segmentTime >= endTime)) {
        continue;
      }
      segments.push(item.name);
    }
    return segments;
  } catch (e) {
    span.setStatus({
      code: SpanStatusCode.ERROR,
      message: e.message,
    });
    throw e;
  } finally {
    span.end();
  }
}

export function parseDateFromSegmentPath(segmentPath: string): Date {
  const splitPath = segmentPath.split("/");
  if (splitPath.length < 3) {
    throw new Error(`${segmentPath} is not a valid segment path.`);
  }

  const segmentTime = new Date(0);
  segmentTime.setUTCFullYear(parseInt(splitPath[2]));

  if (splitPath.length >= 4) {
    segmentTime.setUTCMonth(parseInt(splitPath[3]) - 1);
  }
  if (splitPath.length >= 5) {
    segmentTime.setUTCDate(parseInt(splitPath[4]));
  }
  if (splitPath.length >= 6) {
    segmentTime.setUTCHours(parseInt(splitPath[5]) / 100);
  }
  return segmentTime;
}

export function minDate(dateA: Date, dateB?: Date): Date {
  if (dateB && dateB < dateA) {
    return dateB;
  }
  return dateA;
}
