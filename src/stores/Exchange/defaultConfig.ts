import { TConfig, TOKEN } from '../interfaces';

export const defaultEthClient: TConfig = {
  nodeURL: 'https://kovan.infura.io/v3',
  explorerURL: 'https://kovan.etherscan.io',
  tokens: [
    TOKEN.ERC721,
    TOKEN.DIP721,
    TOKEN.ERC1155,
    TOKEN.DIP1155,
    TOKEN.DIP20,
    TOKEN.ERC20,
    TOKEN.ICP,
    TOKEN.ETH,
  ],
  contracts: {
    erc20Manager: '0xba1f4b06225A2Cf8B56D711539CbbeF1c097a886',
    erc721Manager: '0x364907a5B9ba4A3353B4Dd11aDC0b2bE8AC58253',
    multisigWallet: '0x4D2F08369476F21D4DEB834b6EA9c41ACAd11413',
    tokenManager: '0xAa0fFF0074E898B922DBAb2c7496cdcC84A28fa0',
    hrc20Manager: '0xA64D59E4350f61679ACDE8eEC06421233Bd2B4E1',
    hrc721Manager: '0x4500Bbc8e248629C20F0b87F865eD1C8649572B9',
    hrc721TokenManager: '0x66e531be7251c8225e8f6ce97a9Aa1Ff2A05613c',
    hrc1155Manager: '0xdc910Bfb4b5274ef1A38a7323D442bA616e671e6',
    hrc1155TokenManager: '0x9cEB5B87C31Dc3a9891eC707656D55b7a4cD0541',
    ethManager: '0xCE670B66C5296e29AB39aBECBC92c60ea330F5dC',
    nativeTokenHRC20: '0x268d6fF391B41B36A13B1693BD25f87FB4E4b392',
    erc1155Manager: '0x0E60717f030f3aF1AfEc2758fDbd9c21F00E13d3',
  },
  gasPrice: 100000000000,
  gasLimit: 150000,
};
