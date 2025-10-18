import { useCurrentAccount, useDisconnectWallet } from '@mysten/dapp-kit';
import '@mysten/dapp-kit/dist/index.css';
import WalletConnect from './component/walletConnect';

function App() {
  const currentAccount = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-left text-gray-800">Login</h2>

        <div className="space-y-3">
          <WalletConnect />

          {currentAccount && (
            <button
              onClick={() => disconnect()}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Disconnect Wallet
            </button>
          )}
        </div>
        {currentAccount && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-800">
              <span className="font-semibold">Wallet Connected</span>
              <br />
              {currentAccount.address}
            </p>
          </div>
        )}

        <p className="text-center text-sm text-gray-500">OR</p>

        {/* Google Login Placeholder */}
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.532 24.552c0-1.636-.147-3.2-.42-4.704H24.48v9.02h13.02c-.56 3.02-2.24 5.58-4.76 7.3v6.06h7.7c4.5-4.14 7.09-10.24 7.09-17.68z"
                fill="#4285F4"
              />
              <path
                d="M24.48 48c6.48 0 11.92-2.16 15.9-5.88l-7.7-6.06c-2.14 1.44-4.88 2.3-8.2 2.3-6.3 0-11.64-4.26-13.56-9.98H2.6v6.24C6.56 43.32 14.7 48 24.48 48z"
                fill="#34A853"
              />
              <path
                d="M10.92 28.38A14.7 14.7 0 0 1 9.2 24c0-1.52.26-2.98.72-4.38v-6.24H2.6A23.98 23.98 0 0 0 0 24c0 3.98.98 7.74 2.6 10.62l8.32-6.24z"
                fill="#FBBC05"
              />
              <path
                d="M24.48 9.52c3.54 0 6.7 1.22 9.2 3.62l6.88-6.88C36.4 2.16 30.96 0 24.48 0 14.7 0 6.56 4.68 2.6 13.38l8.32 6.24c1.92-5.72 7.26-9.98 13.56-9.98z"
                fill="#EA4335"
              />
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
