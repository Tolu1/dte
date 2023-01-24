import React, { useContext } from "react";
import { compressAddress } from "../utils/helper";
import { ethers } from "ethers";
import moment from "moment";
import { AppContext } from "@/context/AppContext";
import { Charity } from "@/typings";

function DefaultDonation() {
  return (
    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
      {/* <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
        <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
          <svg
            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3"></circle>
          </svg>
          Completed
        </span>
      </div> */}

      {/* <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
        <span className="text-xs font-medium text-yellow-900 bg-yellow-100 rounded-full inline-flex items-center px-2.5 py-1">
          <svg
            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3"></circle>
          </svg>
          Pending
        </span>
      </div> */}

      <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
        <span className="text-xs font-medium text-red-900 bg-red-100 rounded-full inline-flex items-center px-2.5 py-1">
          <svg
            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3"></circle>
          </svg>
          Failed
        </span>
      </div>

      <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
        <p className="text-sm font-bold text-gray-800">
          {compressAddress("0x9ee328c361d992A4F2B722EbeD84d82B21719858")}
        </p>
        <p className="mt-1 text-sm font-medium text-gray-500">
          Charity Address
        </p>
      </div>

      <div className="px-4 lg:py-4 sm:px-6">
        <p className="text-sm font-bold text-gray-800">02.94 ETH</p>
        <p className="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
      </div>

      <div className="px-4 lg:py-4 sm:px-6">
        <p className="mt-1 text-sm font-medium text-gray-500">
          African Climate Fund
        </p>
      </div>
    </div>
  );
}

function Donation({
  donation,
  txinternal,
  charities,
}: {
  donation: any;
  txinternal: any[];
  charities: Charity[];
}) {
  // Review this function for hash collision
  const tx = txinternal.find((tx: any) => tx.hash === donation.hash);
  // @ts-expect-error
  const address: ethers.utils.Address = tx.to;

  const getCharityName = () => {
    const charity = charities.find((c) => c.wallet === address);
    return charity ? charity.name : "Unknown";
  };

  return (
    <div className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
      <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
        <span className="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
          <svg
            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3"></circle>
          </svg>
          Completed
        </span>
      </div>

      {/* <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
        <span className="text-xs font-medium text-yellow-900 bg-yellow-100 rounded-full inline-flex items-center px-2.5 py-1">
          <svg
            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3"></circle>
          </svg>
          Pending
        </span>
      </div> */}

      {/* <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
        <span className="text-xs font-medium text-red-900 bg-red-100 rounded-full inline-flex items-center px-2.5 py-1">
          <svg
            className="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3"></circle>
          </svg>
          Canceled
        </span>
      </div> */}

      <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
        <a
          href={`https://goerli.etherscan.io/address/${address}#internaltx`}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-sm font-bold text-gray-800">
            {compressAddress(address)}
          </p>
          <p className="mt-1 text-sm font-medium text-gray-500">
            Charity Address
          </p>
        </a>
      </div>

      <div className="px-4 lg:py-4 sm:px-6">
        <p className="text-sm font-bold text-gray-800">
          {ethers.utils.formatEther(donation.value)} ETH
        </p>
        <p className="mt-1 text-sm font-medium text-gray-500">
          {moment.unix(donation.timeStamp).format("MMM DD, YYYY")}
        </p>
      </div>

      <div className="px-4 lg:py-4 sm:px-6">
        <p className="mt-1 text-sm font-medium text-gray-500">
          {getCharityName()}
        </p>
      </div>
    </div>
  );
}

function DashboardDonations({
  donations,
  txinternal,
  charities,
}: {
  donations: any[];
  txinternal: any[];
  charities: Charity[];
}) {
  const { connected, account } = useContext(AppContext);

  const userDonations = donations.filter((tx: any) => {
    return tx.from === account;
  });

  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-4">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold text-gray-800">Your Donations</p>
            <p className="mt-1 text-sm font-medium text-gray-500">
              Recent donations to your favorite causes.
            </p>
          </div>

          {/* <div className="mt-4 sm:mt-0">
            <a
              href="#"
              title=""
              className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-800"
            >
              See all Transactions
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {connected ? (
          <>
            {userDonations.map((donation, index) => (
              <Donation
                key={index}
                donation={donation}
                txinternal={txinternal}
                charities={charities}
              />
            ))}
            <DefaultDonation />
          </>
        ) : (
          <div className="flex justify-center p-10 pb-12">
            <div className="font-medium text-xl text-gray-300">
              Please connect your wallet to view your account information.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardDonations;
