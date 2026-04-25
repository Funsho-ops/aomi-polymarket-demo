"use client";

import { ApiKeyInput } from "@/components/api-key-input";
import { AppSelect } from "@/components/app-select";
import { ModelSelect } from "@/components/model-select";
import { NetworkSelect } from "@/components/network-select";
import { ConnectButton } from "@/components/connect-button";

export type ControlBarProps = {
  showApiKey?: boolean;
  showAppSelect?: boolean;
  showModelSelect?: boolean;
  showNetworkSelect?: boolean;
  showConnectButton?: boolean;
  hideWallet?: boolean;
  hideNetwork?: boolean;
};

export function ControlBar({
  showApiKey = true,
  showAppSelect = true,
  showModelSelect = true,
  showNetworkSelect = true,
  showConnectButton = true,
  hideWallet = false,
  hideNetwork = false,
}: ControlBarProps) {
  return (
    <div className="flex items-center gap-2 p-2 border-b">
      {showApiKey && <ApiKeyInput />}
      {showAppSelect && <AppSelect />}
      {showModelSelect && <ModelSelect />}
      {!hideNetwork && showNetworkSelect && <NetworkSelect />}
      {!hideWallet && showConnectButton && <ConnectButton />}
    </div>
  );
}
