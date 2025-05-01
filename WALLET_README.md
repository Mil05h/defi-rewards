# Wallet Integration Guide

This project uses [RainbowKit](https://www.rainbowkit.com/) and [wagmi](https://wagmi.sh/) for wallet connections. These libraries provide an easy way to connect with MetaMask, WalletConnect, and many other wallets.

## Setup

### 1. WalletConnect Project ID

To use WalletConnect, you need a Project ID from WalletConnect Cloud:

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Sign up or log in to your account
3. Create a new project or use an existing one
4. Copy the Project ID

### 2. Environment Variables

Create a `.env` file in the root directory (or copy `.env.example` if provided) and add your WalletConnect Project ID:

```
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

Replace `your_project_id_here` with the Project ID from WalletConnect Cloud.

### 3. Running the Application

Once you've set up the environment variables, you can run the application:

```bash
yarn dev
```

## Features

The wallet integration provides the following features:

- Connect to various wallets (MetaMask, WalletConnect, etc.)
- Display the connected wallet address
- Support for multiple chains (Ethereum Mainnet and Sepolia Testnet)
- Easy-to-use UI with RainbowKit's components

## Usage

The `WalletConnect` component provides a connect button and displays the connected address:

```jsx
import { WalletConnect } from "./components/WalletConnect";

function MyComponent() {
  return (
    <div>
      <WalletConnect />
    </div>
  );
}
```

For more advanced usage, you can use wagmi hooks directly:

```jsx
import { useAccount, useEnsName } from "wagmi";

function Profile() {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });

  if (isConnected) {
    return <div>Connected to {ensName ?? address}</div>;
  }

  return <div>Not connected</div>;
}
```
