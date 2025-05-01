import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { WagmiProvider, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// Create a new query client for React Query
const queryClient = new QueryClient();

// Get the WalletConnect Project ID from environment variables
const projectId =
  import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || "development";

// Configure wagmi & RainbowKit
const config = getDefaultConfig({
  appName: "DeFi Rewards",
  projectId, // Using the environment variable
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

// Provider component for wallet connection
export function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
