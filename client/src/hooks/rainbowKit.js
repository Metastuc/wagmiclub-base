import '@rainbow-me/rainbowkit/styles.css';
import { http } from 'wagmi';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  rainbowWallet,
  walletConnectWallet,
  bitgetWallet,
  metaMaskWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets';
import { createConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  base,
  baseSepolia,
} from 'wagmi/chains';

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, walletConnectWallet, bitgetWallet, trustWallet],
    },
  ],
  {
    appName: 'WagmiClub',
    projectId: 'YOUR_PROJECT_ID',
  }
);

const config = createConfig({
  chains: [base, baseSepolia],
  connectors,
  ssr: true, 
  transports: {
    [base.id]: http('https://mainnet.example.com'),
    [baseSepolia.id]: http('https://mainnet.example.com'),
  },
})

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
            <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
