"use client";
import React, { useContext } from "react";
// @ts-ignore ethers/utils clearly exists
import { Address } from "ethers/utils";
import { DonationContext } from "../../context/DonationContext";
import { AppContext } from "../../context/AppContext";

type CharityProps = {
  id: number;
  name: string;
  mission: string;
  website: string;
  totalDonation: number;
  active: boolean;
  wallet: Address;
};

function Donate({
  charityId,
  charity,
  onClose,
}: {
  charityId: number;
  charity: CharityProps;
  onClose: () => void;
}) {
  const { connected, connectWallet, error } = useContext(AppContext);
  const { handleAmount, makeDonation } = useContext(DonationContext);

  const handleDonate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    makeDonation(charityId);
  };
  return (
    // <div className="grid px-4 py-24 bg-gray-600 sm:px-6 lg:px-8 place-items-center">
    <div className="relative w-full max-w-md mx-auto overflow-hidden bg-white rounded-xl">
      <div className="absolute top-0 right-0 pt-3 pr-3">
        <button
          type="button"
          className="p-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          onClick={onClose}
        >
          <span className="sr-only"> Close </span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <div className="px-6 py-8 md:p-8 xl:p-12">
        <div className="text-center">
          <p className="text-xl font-bold text-gray-900 sm:text-2xl">
            Donate to{" "}
            <a href={charity.website}>
              <span className="text-green">{charity.name}</span>
            </a>
          </p>
          <p className="mt-2 text-base font-medium text-gray-500">
            You are about to dress the earth? You are a real one!
          </p>
        </div>

        <div className="mt-8 bg-white border border-gray-200 rounded-xl">
          <div className="p-4">
            <div className="flex items-center">
              <img
                className="object-cover w-auto rounded-lg shrink-0 h-14"
                // src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/approve-transaction/2/product-thumbnail.png"
                src="/images/logo.svg"
                alt=""
              />

              <div className="flex-1 space-y-2 ml-4">
                <div className="flex items-center space-x-1">
                  <p className="whitespace-nowrap text-base font-bold text-gray-900 xl:whitespace-normal">
                    {charity.name}
                  </p>
                  {/* <div className="relative top-[-3px]"> */}
                  <img
                    className="w-5 h-5"
                    src="/images/verified-animated.gif"
                    alt="verified"
                  />
                  {/* </div> */}
                </div>

                <div className="flex items-center space-x-2">
                  <p className=" md:whitespace-nowrap mt-1 text-sm font-medium text-gray-500">
                    $: 0.0
                  </p>
                  <input
                    type="number"
                    name="amount"
                    id=""
                    min="0"
                    step="0.0001"
                    placeholder="0.0 ETH"
                    className="block w-1/2 h-5 px-3 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                    onChange={(e) => {
                      handleAmount(e, e.currentTarget.name);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          {connected ? (
            <button
              type="button"
              className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-green border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-green-hover"
              onClick={(e) => handleDonate(e)}
            >
              Donate
            </button>
          ) : (
            <button
              type="button"
              className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-green border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-green-hover"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Donate;
