import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export function WalletConnect() {
  const { address, isConnected } = useAccount();

  return (
    <div className="flex flex-col items-center gap-4">
      <ConnectButton />

      {isConnected && address && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-sm">
          <p className="text-gray-700 font-medium">Connected Address:</p>
          <p className="font-mono text-sm break-all">{address}</p>
        </div>
      )}
    </div>
  );
}
