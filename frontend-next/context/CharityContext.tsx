"use client";
import detectEthereumProvider from "@metamask/detect-provider";
import React, { createContext, useEffect, useState } from "react";
import { loadContract } from "../utils/interactions";

interface Charity {
  id: number;
  name: string;
  mission: string;
  website: string;
  totalDonation: number;
  active: boolean;
  wallet: string;
}

interface CharityContextType {
  charities: Charity[];
  setCharitiesData: (charities: Charity[]) => void;
  getCharities: () => Promise<Charity[]>;
}

export const CharityContext = createContext<CharityContextType>({
  charities: [],
  setCharitiesData: (charities: Charity[]) => {},
  getCharities: async () => {
    return [];
  },
});

function CharityProvider({ children }: { children: React.ReactNode }) {
  const contract = loadContract();
  const [charities, setCharities] = useState<Charity[]>([]);
  const setCharitiesData = (charities: Charity[]) => {
    setCharities(charities);
  };

  // @ts-ignore for now!!!!! TODO: also catch the error here
  // const { ethereum } = typeof window !== "undefined" ? window : {};
  // const contract = loadContract(ethereum);

  // const [charities, setCharities] = useState<Charity[]>([]);
  // const [count, setCount] = useState(0);

  const _getCharities = async () => {
    const count = await contract?.charityIdCounter();
    console.log(`count: ${count}`);
    // Fetch all charities
    const charities: Charity[] = [];
    for (let i = 0; i < count; i++) {
      // Fetch charity by ID since ID is the same as index
      const charity = await contract?.charities(i);

      // Parse charity data
      charities.push({
        id: i,
        name: charity.name,
        mission: charity.mission,
        website: charity.website,
        totalDonation: charity.totalDonation,
        active: charity.active,
        wallet: charity.wallet.toLowerCase(),
      });
    }

    return charities;
  };

  // Due to bugs in Nextjs 13 and the wakeable.then errors, I will implement the charities list without using state for now
  // by passing the function as a prop to the charitylist function to be called

  const getCharities = async () => {
    const charities = await _getCharities();
    return charities;
  };

  // const getCharities = async () => {
  //   return [];
  // };

  useEffect(() => {
    const handleCharities = async () => {
      console.log("debugging charity context");
      // contract?.on(
      //   "CharityAdded",
      //   async (charityId, name, mission, website, active, wallet) => {}
      // );
      // const charities = await _getCharities();
      // console.log(`charities: ${charities}`);
      // setCharities(charities); //Giving errors due to buggy nextjs 13 appdir
    };

    handleCharities();
  }, []);

  return (
    <CharityContext.Provider
      value={{ getCharities, charities, setCharitiesData }}
    >
      {children}
    </CharityContext.Provider>
  );
}

export default CharityProvider;
