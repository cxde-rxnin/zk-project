import { useWallets, useConnectWallet, useCurrentAccount, useDisconnectWallet } from '@mysten/dapp-kit';
import '@mysten/dapp-kit/dist/index.css';

export default function WalletConnect() {
  const wallets = useWallets();
  const { mutate: connect } = useConnectWallet();
  const { mutate: disconnect } = useDisconnectWallet();
  const currentAccount = useCurrentAccount();

  return (
    <div className="space-y-3">
      {!currentAccount ? (
        wallets.length > 0 ? (
          wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => connect({ wallet })}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-2"
            >
              Connect {wallet.name}
            </button>
          ))
        ) : (
          <div className="text-center text-sm text-gray-500">No wallet detected. Please install a Sui wallet extension.</div>
        )
      ) : (
        <button
          onClick={() => disconnect()}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Disconnect Wallet
        </button>
      )}
    </div>
  );
}
