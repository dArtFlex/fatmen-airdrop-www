import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import JSBI from "jsbi";
import { contractAddress } from '../contracts/addresses'
import abiClaimFatmenDaf from '../contracts/abi/claimFatmenDaf.json'
import abiStandardToken from '../contracts/abi/standardToken.json'
import BigNumber from 'bignumber.js'
import { whiteWallets } from './whitewallets'
import { toast } from 'react-toastify';

const chain = {
  __ropsten: {
    network: "ropsten",
    id: 3,
    idHex: '0x3',
  },
};

const claimFatmenDafAddress = contractAddress['__ropsten'].claimFatmenDaf;
const tokenMetaiAddress = contractAddress['__ropsten'].erc20Metai;
const chainId = chain['__ropsten'];

const testWallet = '0x49a4C27EB3FD892557BaA884909195a8C80ffcC6';
const cost = "50000000000000000";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.INFURA_KEY // required
    }
  }
};

const web3Modal = new Web3Modal({
  network: chainId.network, // optional
  cacheProvider: true, // optional
  providerOptions // required
});

export var web3;
export var provider;

export const checkNetwork = async (provider) => {
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId.idHex }]
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error("Can't setup the network on metamask because window.ethereum is undefined")
    return false
  }
}

export const connectWallet = async () => {
  provider = await web3Modal.connect();
  web3 = new Web3(provider);

  if (provider.chainId !== chainId.id) {
    await checkNetwork(provider)
  }

  provider.on("disconnect", async (code, reason) => {
    web3Modal.clearCachedProvider();
    provider = null;
    web3 = null;
  });
}

export async function getAccounts() {
  if (!provider) return;
  try {
    const accounts = await web3?.eth.getAccounts()
    const selectedAccount = accounts[0];

    return selectedAccount;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export const claim = async () => {
  try {
    provider = await web3Modal.connect();
    web3 = new Web3(provider);
    const contract = new web3.eth.Contract(abiClaimFatmenDaf, claimFatmenDafAddress);
  
    const tokenAddress = await contract.methods.TokenAddr().call();
    await addToken(tokenAddress);
  
    const acc = (await web3.eth.getAccounts())[0];
    const guard = [...whiteWallets, testWallet].some((wAcc) => wAcc.toLowerCase() === acc.toLowerCase())
    if (guard) {
      await contract.methods.Claim(acc).send({ from: acc, to: claimFatmenDafAddress, })
      toast.success("The claim has been succeeded!");
    } else {
      toast.error("A wallet address isn't included in the white list! Please contact with the owner.");
    }
  } catch (e) {
    toast.error(e.message);
  }
}

// const provider = await web3Modal.connect();
export const mint = async (totalToMint) => {
  const contract = new web3.eth.Contract(abiClaimFatmenDaf, claimFatmenDafAddress);
  const transactionParameters = {
    to: claimFatmenDafAddress,
    from: (await getAccounts()),
    value: JSBI.multiply(
      JSBI.BigInt(cost),
      JSBI.BigInt(totalToMint.toString())
    ).toString(16),
    data: contract.methods.mintFatmen(totalToMint).encodeABI(),
  };

  try {
    await provider?.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return true
  } catch (error) {
    console.log(error);
  }
}

export const addToken = async (address) => {
  provider = await web3Modal.connect();
  web3 = new Web3(provider);

  const acc = (await web3.eth.getAccounts())[0];

  if (window?.ethereum) {
    if (!address) {
      console.log(`addToken: Unknown token address`);
      return
    }

    const stored = localStorage.getItem('addTokenToAccount');

    const alreadyAdded = JSON.parse(stored);
    if (alreadyAdded !== null && alreadyAdded.some((aAdded) => aAdded === acc)) {
      return
    }

    const contractToken = new web3.eth.Contract(abiStandardToken, address);
    const symbol = await contractToken.methods.symbol().call();
    const decimals = await contractToken.methods.decimals().call();
    if (address && symbol && decimals) {
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address, // The address that the token is at.
            symbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals, // The number of decimals in the token
            image: '', // A string url of the token logo
          },
        },
      });
      localStorage.setItem('addTokenToAccount', JSON.stringify(alreadyAdded !== null ? [...alreadyAdded, acc] : [acc]));
    }
  }
} 

export const getDafOnInfo = async (dafAvailableRef = null, claimEnableRef = null, claimAmountRef = null, claimCountRef  = null) => {
  try {
    const getInfo = async () => {
      provider = await web3Modal.connect();
      web3 = new Web3(provider);
    
      const acc = (await web3.eth.getAccounts())[0];
      
      const contract = new web3.eth.Contract(abiClaimFatmenDaf, claimFatmenDafAddress);
      const balanceOfDaf = await contract.methods.TokenBalance().call();
      const tokenAddress = await contract.methods.TokenAddr().call();
      const tokenContract = new web3.eth.Contract(abiStandardToken, tokenAddress);
      const decimals = await tokenContract.methods.decimals().call();
    
      if (balanceOfDaf && decimals) {
        dafAvailableRef.current.innerHTML = new BigNumber(balanceOfDaf).div(10 ** decimals).toString();
      }
    
      const enableToClaim = await contract.methods.ClaimCheckEnable(acc).call();
      claimEnableRef.current.innerHTML = enableToClaim;
    
      const availableToClaim = await contract.methods.ClaimCheckAmount(acc).call();
      claimAmountRef.current.innerHTML = availableToClaim;
    
      const claimCount = await contract.methods.ClaimCount().call();
      claimCountRef.current.innerHTML = claimCount;
    }

    getInfo();
  
  setInterval(async () => {
    getInfo();
  }, 3000);
  } catch (e) {
    throw new Error(e);
  }
}

export const getMinted = async (ref = null) => {
  provider = await web3Modal.connect();
  web3 = new Web3(provider);
  const contract = new web3.eth.Contract(abiStandardToken, tokenMetaiAddress);

  const getTotalSupply = async () => {
    const decimals = await contract.methods.decimals().call();
    const totalSupply = await contract.methods.totalSupply().call();
    ref.current.innerHTML = totalSupply / 10 ** +decimals;
  }

  getTotalSupply();
  
  setInterval(async () => {
    getTotalSupply();
  }, 3000);
}