import React from "react";
import { ethers } from "ethers";

function DonationHighlight({
  latestDonationValue,
}: {
  latestDonationValue: number;
}) {
  return (
    <div className="absolute bottom-0 left-0 mb-12 -ml-2 bg-white shadow-2xl sm:mb-24 sm:-ml-24 lg:-ml-12 xl:-ml-24 w-72 rounded-2xl">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-start">
          <img src="/images/ethereum.svg" height="22px" width="22px" />
          <div className="ml-4">
            <p className="text-3xl font-semibold text-gray-900">
              {ethers.utils.formatEther(latestDonationValue.toString())}
            </p>
            <p className="mt-1 text-lg font-normal text-gray-700">
              {" "}
              ETH in donations was sent just now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationHighlight;
