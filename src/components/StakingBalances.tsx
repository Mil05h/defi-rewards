import { useStakingBalances } from "../hooks/useStakingBalances";

export function StakingBalances() {
  const { reth, steth, isLoading } = useStakingBalances();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* rETH Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {reth.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-blue-600">
            {reth.balance}
          </span>
          <span className="text-lg text-gray-600">{reth.symbol}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Decimals: {reth.decimals}</p>
      </div>

      {/* stETH Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {steth.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-blue-600">
            {steth.balance}
          </span>
          <span className="text-lg text-gray-600">{steth.symbol}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Decimals: {steth.decimals}</p>
      </div>
    </div>
  );
}
