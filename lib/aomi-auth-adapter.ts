"use client";

import { useCallback } from "react";

export type WalletIdentity = {
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
};

export type WalletAuthAdapter = {
  identity: WalletIdentity;
  getAuthToken: () => Promise<string | null>;
  getAddress: () => Promise<string | null>;
  switchChain: (chainId: number) => Promise<void>;
  isSwitchingChain: boolean;
};

export function useAomiAuthAdapter(): WalletAuthAdapter {
  const getAuthToken = useCallback(async () => {
    return null;
  }, []);

  const getAddress = useCallback(async () => {
    return null;
  }, []);

  const switchChain = useCallback(async (_chainId: number) => {
    return;
  }, []);

  return {
    identity: {
      address: null,
      chainId: null,
      isConnected: false,
    },
    getAuthToken,
    getAddress,
    switchChain,
    isSwitchingChain: false,
  };
}