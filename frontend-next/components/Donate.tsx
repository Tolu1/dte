import React, { useContext, useState } from "react";
import { DonationContext } from "@/context/DonationContext";
import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/router";

type CharityProps = {
  id: number;
  name: string;
  mission: string;
  website: string;
  totalDonation: number;
  active: boolean;
  // @ts-expect-error
  wallet: ethers.utils.Address;
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
  const {
    charityInFocus,
    isSuccessful,
    setIsSuccessfulFlag,
    donationInProgress,
    transactionHash,
    transactionConfirmed,
    setConfirmed,
    donationAmount,
    handleAmount,
    makeDonation,
  } = useContext(DonationContext);

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleDonate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await makeDonation(charityId);
    // transactionConfirmed && refreshData();
    refreshData();
  };

  const handleClose = () => {
    setConfirmed(false); // To reset the transaction confrimed flag to false
    onClose();
  };

  return (
    <div>
      {donationInProgress || transactionConfirmed ? (
        <div className="relative w-full max-w-md mx-auto overflow-hidden bg-white rounded-xl">
          <div className="absolute top-0 right-0 pt-3 pr-3">
            <button
              type="button"
              className="p-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              onClick={handleClose}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-8">
            <div className="text-center">
              {!transactionConfirmed ? (
                <svg
                  className="w-10 h-10 mx-auto text-gray-900 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-16 h-16 mx-auto text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}

              {charityId !== charityInFocus ? (
                <>
                  <p className="mt-8 text-xl font-bold text-gray-900">
                    You have a Pending Donation
                  </p>
                  <p className="mt-3 text-base font-medium text-gray-600">
                    Please confirm the pending donation with{" "}
                    <span className="text-green">{charity.name}</span> in your
                    Metamask wallet before you make another one.
                  </p>
                </>
              ) : (
                <>
                  {!transactionConfirmed ? (
                    <>
                      <p className="mt-8 text-xl font-bold text-gray-900">
                        Donation in Progress
                      </p>
                      <p className="mt-3 text-base font-medium text-gray-600">
                        Please confirm this transaction in your Metamask wallet.
                        Sit back and admire the beauty of nature while you wait.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="mt-4 text-xl font-bold text-green">
                        Success
                      </p>
                      <p className="mt-3 text-base font-medium text-gray-600">
                        Take a moment to appreciate the beauty of the world
                        around you, knowing that you have played a part in
                        making it a better place.
                      </p>
                    </>
                  )}
                </>
              )}

              <div className="mt-8">
                {!transactionConfirmed ? (
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded-md animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white cursor-not-allowed pointer-events-none"
                  >
                    Please Wait
                  </button>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white"
                    onClick={handleClose}
                  >
                    Continue
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="px-6 py-8 md:p-8 xl:p-12">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                Donate to{" "}
                <a href={charity.website} target="_blank" rel="noreferrer">
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
                      <p className="whitespace-nowrap text-base font-bold text-gray-900 lg:whitespace-normal">
                        {charity.name}
                      </p>
                      <img
                        className="w-5 h-5"
                        src="/images/verified-animated.gif"
                        alt="verified"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      {/* <p className=" md:whitespace-nowrap mt-1 text-sm font-medium text-gray-500">
                        $: 0.0
                      </p> */}
                      <input
                        type="number"
                        name="amount"
                        id=""
                        min="0"
                        step="0.0001"
                        placeholder="0 ETH"
                        className="block w-1/2 h-5 px-3 py-3 placeholder-gray-500 border-b-2 border-gray-300 outline-none rounded-none focus:ring-green-600 focus:border-gray-400 sm:text-sm caret-green-600"
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
                  className={`inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-green border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-green-hover ${
                    donationAmount.amount > 0
                      ? ""
                      : "opacity-60 cursor-not-allowed pointer-events-none"
                  }`}
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
      )}
    </div>
  );
}

export default Donate;
