import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineRunCommand,
  VirtualMachineScaleSetVMRunCommandsListOptionalParams,
  VirtualMachineScaleSetVMRunCommandsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetVMRunCommandsCreateOrUpdateResponse,
  VirtualMachineRunCommandUpdate,
  VirtualMachineScaleSetVMRunCommandsUpdateOptionalParams,
  VirtualMachineScaleSetVMRunCommandsUpdateResponse,
  VirtualMachineScaleSetVMRunCommandsDeleteOptionalParams,
  VirtualMachineScaleSetVMRunCommandsGetOptionalParams,
  VirtualMachineScaleSetVMRunCommandsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachineScaleSetVMRunCommands. */
export interface VirtualMachineScaleSetVMRunCommands {
  /**
   * The operation to get all run commands of an instance in Virtual Machine Scaleset.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMRunCommandsListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineRunCommand>;
  /**
   * The operation to create or update the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Create Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommand,
    options?: VirtualMachineScaleSetVMRunCommandsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        VirtualMachineScaleSetVMRunCommandsCreateOrUpdateResponse
      >,
      VirtualMachineScaleSetVMRunCommandsCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to create or update the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Create Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommand,
    options?: VirtualMachineScaleSetVMRunCommandsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetVMRunCommandsCreateOrUpdateResponse>;
  /**
   * The operation to update the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Update Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommandUpdate,
    options?: VirtualMachineScaleSetVMRunCommandsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetVMRunCommandsUpdateResponse>,
      VirtualMachineScaleSetVMRunCommandsUpdateResponse
    >
  >;
  /**
   * The operation to update the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Update Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommandUpdate,
    options?: VirtualMachineScaleSetVMRunCommandsUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetVMRunCommandsUpdateResponse>;
  /**
   * The operation to delete the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    options?: VirtualMachineScaleSetVMRunCommandsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The operation to delete the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    options?: VirtualMachineScaleSetVMRunCommandsDeleteOptionalParams
  ): Promise<void>;
  /**
   * The operation to get the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    options?: VirtualMachineScaleSetVMRunCommandsGetOptionalParams
  ): Promise<VirtualMachineScaleSetVMRunCommandsGetResponse>;
}