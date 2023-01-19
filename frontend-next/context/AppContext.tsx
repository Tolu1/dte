"use client";
import React from "react";
import { createContext, useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../utils/interactions";
import { CHAIN_ID } from "../utils/constants";

interface AppContextType {
  connected: boolean;
  isOwner: boolean;
  account: string;
  connectWallet: () => Promise<void>; // Find better typing for connect wallet
  latestDonation: number;
  error: string;
}

export const AppContext = createContext<AppContextType>({
  connected: false,
  isOwner: false,
  account: "",
  connectWallet: async () => {},
  latestDonation: 0,
  error: "",
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // @ts-ignore for now!!!!!
  const { ethereum } = typeof window !== "undefined" ? window : {};
  const contract = loadContract();

  const [connected, setConnected] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [account, setAccount] = useState("");
  const [latestDonation, setLatestDonation] = useState(0);
  // const [contract, setContract] = useState(loadContract());
  const [charityData, setCharityData] = useState([]);
  const [provider, setProvider] = useState({});
  const [error, setError] = useState("");

  const checkEthereumExists = async () => {
    const provider = await detectEthereumProvider();
    return provider;
  };

  const ensureNetwork = async () => {
    const provider = await checkEthereumExists();
    if (provider) {
      // @ts-ignore
      const chainId = await provider.request({ method: "eth_chainId" });
      if (chainId !== CHAIN_ID) {
        try {
          // @ts-ignore
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: CHAIN_ID }],
          });
          console.log("You have switched to the right network");
        } catch (switchError) {
          // The network has not been added to MetaMask
          // @ts-ignore 'switchError' is of type 'unknown'
          if (switchError.code === 4902) {
            try {
              // @ts-ignore
              await provider.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x5",
                    chainName: "Goerli Test network",
                    rpcUrls: ["https://goerli.infura.io/v3/"],
                    blockExplorerUrls: ["https://goerli.etherscan.io/"],
                    nativeCurrency: {
                      symbol: "GoerliETH",
                      decimals: 18,
                    },
                  },
                ],
              });
            } catch (err) {
              console.log(err);
            }
          }
          console.log("Cannot switch to the network");
        }
      }
    }
  };

  const getConnectedAccounts = async () => {
    setError("");
    const ethereum = await checkEthereumExists();
    if (ethereum) {
      try {
        // @ts-ignore
        const accounts = await ethereum.request({
          method: "eth_accounts",
        });
        console.log(`accounts: ${accounts} from getConnectedAccounts()`);
        // NOTE: Check if accounts returns more than one element in the list
        if (accounts.length != 0) {
          setConnected(true);
          setAccount(accounts[0]);
          ensureNetwork();
          const owner = await contract?.owner();
          if (owner.toLowerCase() == accounts[0].toLowerCase())
            setIsOwner(true);
        }
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  const connectWallet = async () => {
    setError("");
    const ethereum = await checkEthereumExists();
    if (ethereum) {
      try {
        // @ts-ignore
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(`accounts: ${accounts} from connectWallet()`);
        // NOTE: Check if accounts returns more than one element in the list
        if (accounts.length != 0) {
          setConnected(true);
          setAccount(accounts[0]);
          ensureNetwork();
          const owner = await contract?.owner();
          if (owner.toLowerCase() == accounts[0].toLowerCase())
            setIsOwner(true);
        }
      } catch (err: any) {
        setError(err.message);
      }
    } else {
      setError("Please Install MetaMask.");
      alert("Please Install MetaMask!");
    }
  };

  useEffect(() => {
    const handleChange = async () => {
      const ethereum = await checkEthereumExists();
      if (ethereum) {
        ethereum.on("accountsChanged", getConnectedAccounts);
        await getConnectedAccounts();
        contract?.on("DonationMade", async (charityId, donor, amount) => {
          console.log(`${donor} donated ${amount} to Charity ${charityId}`);
          setLatestDonation(amount);
        });
        console.log(`error: ${error}`);
      }
    };

    handleChange();

    return () => {
      // @ts-ignore for now!!!!
      const { ethereum } = typeof window !== "undefined" ? window : {};
      if (ethereum) {
        ethereum.removeListener("accountsChanged", getConnectedAccounts);
      }
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        connected,
        isOwner,
        account,
        connectWallet,
        latestDonation,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
