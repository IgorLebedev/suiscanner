import React, { createContext, ReactNode } from 'react';
import { JsonRpcProvider, devnetConnection } from '@mysten/sui.js';

export const SuiNetworkContext = createContext({});

export const SuiNetworkProvider = ({ children }: { children: ReactNode}) => {
  const provider = new JsonRpcProvider(devnetConnection);
  return (
    <SuiNetworkContext.Provider value={(provider)}>
      {children}
    </SuiNetworkContext.Provider>
  )
};
