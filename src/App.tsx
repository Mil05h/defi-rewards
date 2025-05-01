import "./App.css";
import { WalletConnect } from "./components/WalletConnect";
import { WalletProvider } from "./components/WalletProvider";
import { StakingBalances } from "./components/StakingBalances";

function App() {
  return (
    <WalletProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">DeFi Rewards</h1>
        <p className="text-xl text-gray-600 max-w-md mb-8">
          Connect your wallet to get started
        </p>

        <WalletConnect />

        <div className="w-full max-w-4xl mt-8">
          <StakingBalances />
        </div>
      </div>
    </WalletProvider>
  );
}

export default App;
