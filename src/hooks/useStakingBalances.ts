import { useBalance, useToken } from "wagmi";
import { mainnet } from "wagmi/chains";
import { useAccount } from "wagmi";

// Contract addresses
const ROCKET_TOKEN_RETH = "0xae78736Cd615f374D3085123A210448E74Fc6393";
const LIDO_TOKEN_STETH = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";

export function useStakingBalances() {
  const { address } = useAccount();

  const { data: rethData, isLoading: isRethLoading } = useToken({
    address: ROCKET_TOKEN_RETH as `0x${string}`,
    chainId: mainnet.id,
  });

  const { data: stethData, isLoading: isStethLoading } = useToken({
    address: LIDO_TOKEN_STETH as `0x${string}`,
    chainId: mainnet.id,
  });

  const { data: rethBalance, isLoading: isRethBalanceLoading } = useBalance({
    address: address,
    token: ROCKET_TOKEN_RETH as `0x${string}`,
    chainId: mainnet.id,
  });

  const { data: stethBalance, isLoading: isStethBalanceLoading } = useBalance({
    address: address,
    token: LIDO_TOKEN_STETH as `0x${string}`,
    chainId: mainnet.id,
  });

  console.log(rethBalance);
  console.log(stethBalance);
  console.log(rethData);
  console.log(stethData);

  return {
    reth: {
      balance: rethBalance?.formatted ?? "0",
      symbol: rethData?.symbol ?? "rETH",
      decimals: rethData?.decimals ?? 18,
      name: rethData?.name ?? "Rocket Pool ETH",
    },
    steth: {
      balance: stethBalance?.formatted ?? "0",
      symbol: stethData?.symbol ?? "stETH",
      decimals: stethData?.decimals ?? 18,
      name: stethData?.name ?? "Lido Staked ETH",
    },
    isLoading:
      isRethLoading ||
      isStethLoading ||
      isRethBalanceLoading ||
      isStethBalanceLoading,
  };
}
