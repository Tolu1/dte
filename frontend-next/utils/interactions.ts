import { ethers } from "ethers";
import {
  CHARITY_REGISTRY_CONTRACT_ABI,
  CONTRACT_ADDRESS,
} from "../utils/constants";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.API_URL;
const ETHER_SCAN_API_KEY = process.env.ETHER_SCAN_API_KEY;

// provider
function getProvider() {
  const alchemyProvider = new ethers.providers.AlchemyProvider(
    "goerli",
    API_KEY
  );
  return alchemyProvider;
}

// signer
function getSigner() {
  try {
    // Assumes presence of metamask and gets the signer on the current account
    // @ts-ignore
    const { ethereum } = typeof window !== "undefined" ? window : {};
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      return signer;
    } else {
      console.log("You need to install MetaMask");
      return undefined;
    }
  } catch (err: any) {
    console.log(err);
  }

  return undefined;
}

export async function getUserBalance() {
  const signer = getSigner();
  try {
    const address = await signer?.getAddress();
    if (address) {
      const balance = await signer?.provider.getBalance(address.toLowerCase());
      return balance;
    }
  } catch (err: any) {
    console.log(err);
  }
}

// gets contract with Alchemy provider
export function loadContract() {
  try {
    const alchemyProvider = getProvider();

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CHARITY_REGISTRY_CONTRACT_ABI,
      alchemyProvider
    );

    return contract;
  } catch (err: any) {
    console.error(err.message);
  }

  return null;
}

// gets contract with MetaMask signer
export function loadContractWithSigner() {
  try {
    const signer = getSigner();
    if (signer) {
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CHARITY_REGISTRY_CONTRACT_ABI,
        signer
      );

      return contract;
    }
    return null;
  } catch (err: any) {
    console.error(`loadContractWithSigner -> [Error] ${err.message}`);
  }

  return null;
}
