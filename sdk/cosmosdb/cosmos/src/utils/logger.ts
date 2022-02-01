// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
* Cosmos Diagnostics used for all clients within the Cosmos package
*/
const cosmosDiagnostics = require('@azure/logger');
export const cosmosDiagnosticsLogger = cosmosDiagnostics.createClientLogger("Cosmos Diagnostics");

/**
 * The log levels supported by the Cosmos Diagnostics.
 * The log levels are:
 * - verbose
 */
export const cosmosDiagnosticsToString = String(cosmosDiagnosticsLogger.verbose.bind(cosmosDiagnostics.log));

export function setCosmosDiagnosticsLogLevel(){
  cosmosDiagnosticsLogger.verbose.bind(cosmosDiagnostics.log)
  cosmosDiagnostics.setLogLevel("verbose");
  cosmosDiagnostics.log = (...args: any) => { console.log(...args); };
  cosmosDiagnosticsLogger.verbose("Cosmos log level set. /${level}");

}
