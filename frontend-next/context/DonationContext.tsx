"use client";
import React, { createContext, useState } from "react";
import { loadContractWithSigner } from "../utils/interactions";
import { ethers } from "ethers";

export const DonationContext = createContext({
  charityInFocus: -1,
  setCurrentCharityInFocus: (charityInFocus: number) => {},
  donationInProgress: false,
  transactionHash: "",
  transactionConfirmed: false,
  setConfirmed: (transactionConfirmed: boolean) => {},
  isSuccessful: false,
  setIsSuccessfulFlag: (isSuccessful: boolean) => {},
  donationAmount: { amount: 0 },
  handleAmount: (e: React.ChangeEvent<HTMLInputElement>, name: string) => {},
  makeDonation: async (charityId: number) => {},
});

function DonationProvider({ children }: { children: React.ReactNode }) {
  const [charityInFocus, setCharityInFocus] = useState(-1);
  const setCurrentCharityInFocus = (charityInFocus: number) =>
    setCharityInFocus(charityInFocus);
  const [donationAmount, setDonationAmount] = useState({ amount: 0 });
  const [donationInProgress, setdonationInProgress] = useState(false);
  const [transactionHash, settransactionHash] = useState("");
  const [transactionConfirmed, setTransactionConfirmed] = useState(false);
  const setConfirmed = (transactionConfirmed: boolean) =>
    setTransactionConfirmed(transactionConfirmed);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const setIsSuccessfulFlag = (isSuccessful: boolean) =>
    setIsSuccessful(isSuccessful);

  const handleAmount = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setDonationAmount((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
    console.log(donationAmount);
  };

  const makeDonation = async (charityId: number) => {
    setCurrentCharityInFocus(charityId);
    settransactionHash("");
    setTransactionConfirmed(false);
    setdonationInProgress(true);
    const { amount } = donationAmount;
    const value = ethers.utils.parseUnits(amount.toString(), "ether");
    const contract = loadContractWithSigner();
    console.log(`donating to ${charityId}`);
    console.log(`donating...${amount}`);
    console.log(`donating...${value}`);
    try {
      const tx = await contract?.donate(charityId, {
        value: ethers.utils.parseUnits(amount.toString(), "ether"),
      });
      settransactionHash(tx.hash);
      await tx.wait();
      setTransactionConfirmed(true);
      setIsSuccessful(true);
    } catch (err: any) {
      console.log(err.message);
    }
    setdonationInProgress(false);
  };

  return (
    <DonationContext.Provider
      value={{
        charityInFocus,
        setCurrentCharityInFocus,
        transactionConfirmed,
        setConfirmed,
        transactionHash,
        donationInProgress,
        isSuccessful,
        setIsSuccessfulFlag,
        donationAmount,
        handleAmount,
        makeDonation,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
}

export default DonationProvider;
