export const DevWallet = '0x99E877887Dc1fE2Bf960FE5fe24C5C5808609F59';
export const IPFS_BASE_URL = 'https://ipfs.io/ipfs/';
export const VIDEO_TYPE = ['video/mp4', 'video/mov', 'video/webm'];
export const IMAGE_TYPE = [
	'image/jpeg',
	'image/png',
	'image/gif',
	'image/svg',
	'image/jpg',
];
export const AUDIO_TYPE = ['audio/mpeg'];

export const NFTAddr = {
	56: '0x6BDB4Eff77dcBB4a4E9D39cA99B5e7c0e315e7c2',
	97: '0x78eAD68009a7411297130EE3Df15fFEcdd23b0b6',
	324: '0x6BDB4Eff77dcBB4a4E9D39cA99B5e7c0e315e7c2',
	280: '0xEca2d141E56224a3BAd2EA4e3457713Fff91073d',
	42161: '0x6BDB4Eff77dcBB4a4E9D39cA99B5e7c0e315e7c2',
	421613: '0x2D3EcB939E4e8af39b9F7D35d495bADb10514B4B',
};

export const CHAIN_ZKMAIN = 324;
export const CHAIN_ZKTEST = 280;
export const CHAIN_BSC = 56;
export const CHAIN_ARBI_ONE = 42161;
export const CHAIN_BSC_TEST = 97;
export const CHAIN_ARBI_TEST = 421613;

export const CHAIN_INFO = {
	56: {
		chainId: '0x38',
		chainName: 'Binace Smart Chain',
		nativeCurrency: {
			name: 'BNB',
			symbol: 'BNB',
			decimals: 18,
		},
		rpcUrls: ['https://bsc-dataseed.binance.org/'],
		blockExplorerUrls: ['https://bscscan.com/'],
	},
	97: {
		chainId: '0x61',
		chainName: 'Binace Test Chain',
		nativeCurrency: {
			name: 'BNB',
			symbol: 'BNB',
			decimals: 18,
		},
		rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
		blockExplorerUrls: ['https://testnet.bscscan.com'],
	},

	324: {
		chainId: '0x144',
		chainName: 'Zksync Main Net',
		nativeCurrency: {
			name: 'ETH',
			symbol: 'ETH',
			decimals: 18,
		},
		rpcUrls: ['https://mainnet.era.zksync.io'],
		blockExplorerUrls: ['https://explorer.zksync.io/'],
	},

	42161: {
		chainId: '0xA4B1',
		chainName: 'Arbitrum One',
		nativeCurrency: {
			name: 'ETH',
			symbol: 'ETH',
			decimals: 18,
		},
		rpcUrls: ['https://arbitrum-mainnet.infura.io'],
		blockExplorerUrls: ['https://arbiscan.io/'],
	},

	421613: {
		chainId: '0x66EED',
		chainName: 'Arbitrum Testnet',
		nativeCurrency: {
			name: 'ETH',
			symbol: 'ETH',
			decimals: 18,
		},
		rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
		blockExplorerUrls: ['https://goerli.arbiscan.io/'],
	},

	280: {
		chainId: '0x118',
		chainName: 'Zksync Test Net',
		nativeCurrency: {
			name: 'ETH',
			symbol: 'ETH',
			decimals: 18,
		},
		rpcUrls: ['https://zksync2-testnet.zksync.dev'],
		blockExplorerUrls: ['https://goerli.explorer.zksync.io/'],
	},
};
