import { JsonRpcProvider, testnetConnection } from '@mysten/sui.js';

export const suiNetworkProvider = new JsonRpcProvider(testnetConnection);
