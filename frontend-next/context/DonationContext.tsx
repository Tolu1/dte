"use client";
import React, { createContext, useState } from "react";
import { loadContractWithSigner } from "../utils/interactions";
import { ethers } from "ethers";

export const DonationContext = createContext({
  makeDonation: async (charityId: number) => {},
  handleAmount: (e: React.ChangeEvent<HTMLInputElement>, name: string) => {},
});

function DonationProvider({ children }: { children: React.ReactNode }) {
  const [donationAmount, setDonationAmount] = useState({ amount: 0 });

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
    const { amount } = donationAmount;
    // const decimals = 18;
    const value = ethers.utils.parseUnits(amount.toString(), "ether");
    const contract = loadContractWithSigner();
    console.log(`donating to ${charityId}`);
    console.log(`donating...${amount}`);
    console.log(`donating...${value}`);
    await contract?.donate(charityId, {
      value: ethers.utils.parseUnits(amount.toString(), "ether"),
    });
  };

  return (
    <DonationContext.Provider value={{ handleAmount, makeDonation }}>
      {children}
    </DonationContext.Provider>
  );
}

export default DonationProvider;
