import React, { createContext, ReactNode } from 'react';
import { JsonRpcProvider, testnetConnection } from '@mysten/sui.js';

export const SuiNetworkContext = createContext({ provider: {} });

export const SuiNetworkProvider = ({ children }: { children: ReactNode}) => {
  const provider = new JsonRpcProvider(testnetConnection);
  return (
    <SuiNetworkContext.Provider value={{ provider }}>
      {children}
    </SuiNetworkContext.Provider>
  )
};
