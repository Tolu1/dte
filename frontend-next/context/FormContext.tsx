"use client";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  CHARITY_REGISTRY_CONTRACT_ABI,
  CONTRACT_ADDRESS,
} from "../utils/constants";
import { loadContractWithSigner } from "../utils/interactions";
import { AppContext } from "./AppContext";
// import React, { useState, useContext } from 'react';
// import { useEffect } from 'react';
// import { EthersProvider, useEthers } from '@ethers-react/core';
// import { Contract } from 'ethers';
// import { Form } from './AddCharityForm';

export const FormContext = createContext({
  formData: {
    name: "",
    mission: "",
    website: "",
    active: false,
    wallet: "",
  },
  // @ts-expect-error For some reason Dispatch' does not exist on React
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      mission: string;
      website: string;
      active: boolean;
      wallet: string;
    }>
  >,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => {},
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
});

function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState({
    name: "",
    mission: "",
    website: "",
    active: false,
    wallet: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    if (e.target.type == "checkbox") {
      console.log(e.target.checked);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.type != "checkbox" ? e.target.value : e.target.checked,
    }));
    console.log(formData);
  };

  const addCharity = async (
    name: string,
    mission: string,
    website: string,
    active: boolean,
    wallet: string
  ) => {
    const ethereum = await detectEthereumProvider();
    if (ethereum) {
      const contract = loadContractWithSigner();
      console.log(contract);
      const tx = await contract?.addCharity(
        name,
        mission,
        website,
        active,
        wallet
      );
      await tx.wait();
      console.log("-------------------------");
      console.log(await contract?.charityIdCounter());
    } else {
      console.error("Please install MetaMask!");
      alert("Please install MetaMask!");
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("Submitting");
    console.log(formData);
    try {
      // Call the addCharity function of the smart contract
      // and pass in the formData as the function arguments
      await addCharity(
        formData.name,
        formData.mission,
        formData.website,
        formData.active,
        formData.wallet
      );

      console.log("Charity added successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContext.Provider
      value={{ formData, setFormData, handleChange, handleSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
