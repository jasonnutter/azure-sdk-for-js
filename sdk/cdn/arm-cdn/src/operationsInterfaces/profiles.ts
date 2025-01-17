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
  Profile,
  ProfilesListOptionalParams,
  ProfilesListByResourceGroupOptionalParams,
  ResourceUsage,
  ProfilesListResourceUsageOptionalParams,
  ProfilesGetOptionalParams,
  ProfilesGetResponse,
  ProfilesCreateOptionalParams,
  ProfilesCreateResponse,
  ProfileUpdateParameters,
  ProfilesUpdateOptionalParams,
  ProfilesUpdateResponse,
  ProfilesDeleteOptionalParams,
  ProfilesGenerateSsoUriOptionalParams,
  ProfilesGenerateSsoUriResponse,
  ProfilesListSupportedOptimizationTypesOptionalParams,
  ProfilesListSupportedOptimizationTypesResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Profiles. */
export interface Profiles {
  /**
   * Lists all of the CDN profiles within an Azure subscription.
   * @param options The options parameters.
   */
  list(
    options?: ProfilesListOptionalParams
  ): PagedAsyncIterableIterator<Profile>;
  /**
   * Lists all of the CDN profiles within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ProfilesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Profile>;
  /**
   * Checks the quota and actual usage of endpoints under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    options?: ProfilesListResourceUsageOptionalParams
  ): PagedAsyncIterableIterator<ResourceUsage>;
  /**
   * Gets a CDN profile with the specified profile name under the specified subscription and resource
   * group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    options?: ProfilesGetOptionalParams
  ): Promise<ProfilesGetResponse>;
  /**
   * Creates a new CDN profile with a profile name under the specified subscription and resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param profile Profile properties needed to create a new profile.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    profileName: string,
    profile: Profile,
    options?: ProfilesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ProfilesCreateResponse>,
      ProfilesCreateResponse
    >
  >;
  /**
   * Creates a new CDN profile with a profile name under the specified subscription and resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param profile Profile properties needed to create a new profile.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    profile: Profile,
    options?: ProfilesCreateOptionalParams
  ): Promise<ProfilesCreateResponse>;
  /**
   * Updates an existing CDN profile with the specified profile name under the specified subscription and
   * resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param profileUpdateParameters Profile properties needed to update an existing profile.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    profileName: string,
    profileUpdateParameters: ProfileUpdateParameters,
    options?: ProfilesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ProfilesUpdateResponse>,
      ProfilesUpdateResponse
    >
  >;
  /**
   * Updates an existing CDN profile with the specified profile name under the specified subscription and
   * resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param profileUpdateParameters Profile properties needed to update an existing profile.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    profileUpdateParameters: ProfileUpdateParameters,
    options?: ProfilesUpdateOptionalParams
  ): Promise<ProfilesUpdateResponse>;
  /**
   * Deletes an existing CDN profile with the specified parameters. Deleting a profile will result in the
   * deletion of all of the sub-resources including endpoints, origins and custom domains.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    profileName: string,
    options?: ProfilesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing CDN profile with the specified parameters. Deleting a profile will result in the
   * deletion of all of the sub-resources including endpoints, origins and custom domains.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    options?: ProfilesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Generates a dynamic SSO URI used to sign in to the CDN supplemental portal. Supplemental portal is
   * used to configure advanced feature capabilities that are not yet available in the Azure portal, such
   * as core reports in a standard profile; rules engine, advanced HTTP reports, and real-time stats and
   * alerts in a premium profile. The SSO URI changes approximately every 10 minutes.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  generateSsoUri(
    resourceGroupName: string,
    profileName: string,
    options?: ProfilesGenerateSsoUriOptionalParams
  ): Promise<ProfilesGenerateSsoUriResponse>;
  /**
   * Gets the supported optimization types for the current profile. A user can create an endpoint with an
   * optimization type from the listed values.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  listSupportedOptimizationTypes(
    resourceGroupName: string,
    profileName: string,
    options?: ProfilesListSupportedOptimizationTypesOptionalParams
  ): Promise<ProfilesListSupportedOptimizationTypesResponse>;
}
