"use client";
import React from "react";
import { createContext, useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../utils/interactions";

interface AppContextType {
  connected: boolean;
  isOwner: boolean;
  account: string;
  connectWallet: () => Promise<void>; // Find better typing for connect wallet
  error: string;
}

export const AppContext = createContext<AppContextType>({
  connected: false,
  isOwner: false,
  account: "",
  connectWallet: async () => {},
  error: "",
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // @ts-ignore for now!!!!!
  const { ethereum } = typeof window !== "undefined" ? window : {};
  const contract = loadContract();

  const [connected, setConnected] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [account, setAccount] = useState("");
  // const [contract, setContract] = useState(loadContract());
  const [charityData, setCharityData] = useState([]);
  const [provider, setProvider] = useState({});
  const [error, setError] = useState("");

  const checkEthereumExists = async () => {
    const provider = await detectEthereumProvider();
    return provider;
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
          const owner = await contract?.owner();
          if (owner.toLowerCase() == accounts[0].toLowerCase())
            setIsOwner(true);
        }
      } catch (err: any) {
        setError(err.message);
      }
    } else {
      setError("Please Install MetaMask.");
    }
  };

  useEffect(() => {
    const handleChange = async () => {
      const ethereum = await checkEthereumExists();
      if (ethereum) {
        ethereum.on("accountsChanged", getConnectedAccounts);
        await getConnectedAccounts();
        // console.log(await contract?.charityIdCounter());
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
      value={{ connected, isOwner, account, connectWallet, error }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
