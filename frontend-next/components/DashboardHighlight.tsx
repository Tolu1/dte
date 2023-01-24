import { AppContext } from "@/context/AppContext";
import { ethers } from "ethers";
import moment from "moment";
import React, { useContext } from "react";

function DashboardHighlight({ donations }: { donations: any[] }) {
  const { connected, account } = useContext(AppContext);

  const getTotalUserDonations = () => {
    let sum = ethers.BigNumber.from(0);
    let userDonations = donations.filter((tx: any) => {
      return tx.from === account;
    });
    userDonations = userDonations.map((donation) => {
      return ethers.BigNumber.from(donation.value);
    });
    userDonations.forEach((value) => {
      sum = sum.add(value);
    });
    return ethers.utils.formatEther(sum);
  };

  const getTodayDonations = () => {
    const today = moment().startOf("day");
    console.log(today);
    let sum = ethers.BigNumber.from(0);
    donations.forEach((donation) => {
      const donationTimestamp = moment.unix(donation.timeStamp);
      if (today.isSame(donationTimestamp, "day")) {
        sum = sum.add(ethers.BigNumber.from(donation.value));
      }
    });
    return ethers.utils.formatEther(sum);
  };

  const getTotalDonations = () => {
    let sum = ethers.BigNumber.from(0);
    let totalDonations = donations.map((donation) => {
      return ethers.BigNumber.from(donation.value);
    });
    totalDonations.forEach((value) => {
      sum = sum.add(value);
    });
    return ethers.utils.formatEther(sum);
  };

  const getTotalDonors = () => {
    let donors = new Set();
    donations.forEach((donation) => {
      donors.add(donation.from);
    });
    return donors.size;
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="px-5 py-4">
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
            Your Donations
          </p>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-bold text-gray-800">
              {getTotalUserDonations()} ETH
            </p>

            {/* <span className="inline-flex items-center text-sm font-semibold text-green-500">
              + 36%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 ml-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                ></path>
              </svg>
            </span> */}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="px-5 py-4">
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
            Today&apos;s Donations
          </p>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-bold text-gray-800">
              {getTodayDonations()} ETH
            </p>

            {/* <span className="inline-flex items-center text-sm font-semibold text-red-500">
              - 14%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 ml-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </span> */}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="px-5 py-4">
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
            Total Donations
          </p>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-bold text-gray-800">
              {getTotalDonations()} ETH
            </p>

            {/* <span className="inline-flex items-center text-sm font-semibold text-green-500">
              + 36%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 ml-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                ></path>
              </svg>
            </span> */}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="px-5 py-4">
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
            Total Donors
          </p>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-bold text-gray-800">
              {getTotalDonors()}
            </p>

            {/* <span className="inline-flex items-center text-sm font-semibold text-green-500">
              + 36%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 ml-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                ></path>
              </svg>
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHighlight;
