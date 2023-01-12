import React from "react";
import { createContext, useEffect, useState } from "react";
import detectEthereumProvider from '@metamask/detect-provider';
import { Contract, ethers } from "ethers";

export const AppContext = createContext({ connected: false, account: "", connectWallet: async () => {}, error: "" });

  const AppProvider = ({ children }: {children: React.ReactNode}) => {

  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [charityData, setCharityData] = useState([]);
  const [provider, setProvider] = useState({});
  const [error, setError] = useState("");

  const checkEthereumExists = async () => {
    const provider = await detectEthereumProvider();
    return provider;
  };

  const getConnectedAccounts = async () => {
    setError("");
    const ethereum = await checkEthereumExists()
    if (ethereum) {
      try {
        // @ts-ignore
        const accounts = await ethereum.request({
          method: "eth_accounts",
        });
        setConnected(true);
        console.log(accounts);
        setAccount(accounts[0]);
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  const connectWallet = async () => {
    setError("");
    const ethereum = await checkEthereumExists()
    if (ethereum) {
      try {
        // @ts-ignore
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setConnected(true);
        console.log(accounts);
        setAccount(accounts[0]);
      } catch (err: any) {
        setError(err.message);
      }
    } else {
      setError("Please Install MetaMask.");
    }
  };

  useEffect(() => {
    const handleChange = async () => {
      const tester = "Testing"
      const ethereum = await checkEthereumExists();
      if (ethereum) {
        ethereum.on("accountsChanged", getConnectedAccounts);
        getConnectedAccounts();
      }
    }

    handleChange();

    return () => {
      // @ts-ignore
      const { ethereum } = typeof window !== "undefined" ? window : {};
      if (ethereum) {
        ethereum.removeListener("accountsChanged", getConnectedAccounts);
      }
    }
    
  }, []);

  return (
    <AppContext.Provider
      value={{ connected, account, connectWallet, error }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;