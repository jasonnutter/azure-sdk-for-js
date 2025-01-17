/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Cluster,
  RedisEnterpriseListByResourceGroupOptionalParams,
  RedisEnterpriseListOptionalParams,
  RedisEnterpriseCreateOptionalParams,
  RedisEnterpriseCreateResponse,
  ClusterUpdate,
  RedisEnterpriseUpdateOptionalParams,
  RedisEnterpriseUpdateResponse,
  RedisEnterpriseDeleteOptionalParams,
  RedisEnterpriseGetOptionalParams,
  RedisEnterpriseGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RedisEnterprise. */
export interface RedisEnterprise {
  /**
   * Lists all RedisEnterprise clusters in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: RedisEnterpriseListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * Gets all RedisEnterprise clusters in the specified subscription.
   * @param options The options parameters.
   */
  list(
    options?: RedisEnterpriseListOptionalParams
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * Creates or updates an existing (overwrite/recreate, with potential downtime) cache cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param parameters Parameters supplied to the Create RedisEnterprise operation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    clusterName: string,
    parameters: Cluster,
    options?: RedisEnterpriseCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RedisEnterpriseCreateResponse>,
      RedisEnterpriseCreateResponse
    >
  >;
  /**
   * Creates or updates an existing (overwrite/recreate, with potential downtime) cache cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param parameters Parameters supplied to the Create RedisEnterprise operation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: Cluster,
    options?: RedisEnterpriseCreateOptionalParams
  ): Promise<RedisEnterpriseCreateResponse>;
  /**
   * Updates an existing RedisEnterprise cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param parameters Parameters supplied to the Update RedisEnterprise operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterUpdate,
    options?: RedisEnterpriseUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RedisEnterpriseUpdateResponse>,
      RedisEnterpriseUpdateResponse
    >
  >;
  /**
   * Updates an existing RedisEnterprise cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param parameters Parameters supplied to the Update RedisEnterprise operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterUpdate,
    options?: RedisEnterpriseUpdateOptionalParams
  ): Promise<RedisEnterpriseUpdateResponse>;
  /**
   * Deletes a RedisEnterprise cache cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    options?: RedisEnterpriseDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a RedisEnterprise cache cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: RedisEnterpriseDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets information about a RedisEnterprise cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: RedisEnterpriseGetOptionalParams
  ): Promise<RedisEnterpriseGetResponse>;
}
