import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SharingUpdate,
  GallerySharingProfileUpdateOptionalParams,
  GallerySharingProfileUpdateResponse
} from "../models";

/** Interface representing a GallerySharingProfile. */
export interface GallerySharingProfile {
  /**
   * Update sharing profile of a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param sharingUpdate Parameters supplied to the update gallery sharing profile.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    sharingUpdate: SharingUpdate,
    options?: GallerySharingProfileUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GallerySharingProfileUpdateResponse>,
      GallerySharingProfileUpdateResponse
    >
  >;
  /**
   * Update sharing profile of a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param sharingUpdate Parameters supplied to the update gallery sharing profile.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    sharingUpdate: SharingUpdate,
    options?: GallerySharingProfileUpdateOptionalParams
  ): Promise<GallerySharingProfileUpdateResponse>;
}