"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { FC, ReactNode } from "react";

import { Base_Sepolia } from "@/assets/data/chains";

interface Props {
	children: ReactNode;
}

const chains = [Base_Sepolia];
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

const metadata = {
	name: "WAGMI Club",
	description: "Club with the Magic Badge",
	url: "https://mywebsite.com",
	icons: ["https://avatars.mywebsite.com/"],
};

const ethersConfig = defaultConfig({
	metadata,
	enableEmail: true,
	defaultChainId: chains[0].chainId,
	rpcUrl: `https://sepolia.base.org`,
	enableEIP6963: true,
	enableInjected: true,
	enableCoinbase: true,
});

createWeb3Modal({
	chains,
	projectId,
	ethersConfig,
	enableAnalytics: true,
	defaultChain: Base_Sepolia,
});

export const Web3Modal: FC<Props> = ({ children }) => {
	return children;
};
