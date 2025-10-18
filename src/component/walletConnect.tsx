import { ConnectButton, useCurrentAccount, useDisconnectWallet } from '@mysten/dapp-kit';
import '@mysten/dapp-kit/dist/index.css';

export default function WalletConnect() {
  const currentAccount = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();

  return (
    <div className="space-y-3">
      {!currentAccount ? (
        <ConnectButton
          connectText="Connect Wallet"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        />
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
