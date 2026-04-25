"use client";

import { useEffect, type FC } from "react";
import { cn, getChainInfo, useUser } from "@aomi-labs/react";
import { useAomiAuthAdapter } from "@/lib/aomi-auth-adapter";

export type ConnectButtonProps = {
  className?: string;
};

export const ConnectButton: FC<ConnectButtonProps> = ({ className }) => {
  const { user, setUser } = useUser();
  const adapter = useAomiAuthAdapter();

  useEffect(() => {
    if (!adapter) return;
  }, [adapter]);

  const address = user?.address ?? null;
  const chainId = user?.chainId ?? null;
  const isConnected = user?.isConnected ?? false;

  const chainInfo = chainId ? getChainInfo(chainId) : null;

  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm",
        className
      )}
      onClick={() => {
        if (isConnected) {
          setUser({ isConnected: false, address: null, chainId: null });
        }
      }}
    >
      {isConnected && address ? (
        <span>
          {address.slice(0, 6)}...{address.slice(-4)}
          {chainInfo ? ` (${chainInfo.name})` : ""}
        </span>
      ) : (
        <span>Connect Wallet</span>
      )}
    </button>
  );
};