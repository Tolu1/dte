import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { compressAddress } from "../utils/helper";

function ConnectWallet() {
  const { connected, account, connectWallet, error } = useContext(AppContext);

  // function compressAddress(address: string): string {
  //   return address.slice(0, 5) + '...' + address.slice(-4);
  // }

  return (
    <>
      {connected ? (
        <div className="flex items-center px-5 py-2 bg-transparent border border-gray-900 rounded-xl outline-none ring-2 ring-offset-2 ring-gray-900">
          <img
            className="object-cover w-5 h-5 rounded-full shrink-0 border"
            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/10/author.png"
            alt=""
          />
          <span title="" className="ml-2 text-sm font-medium text-gray-900">
            {compressAddress(account)}
          </span>
        </div>
      ) : (
        // <span>Connected With <b>{compressAddress(account)}</b></span>
        <a
          href="#"
          title=""
          className="
                inline-flex
                items-center
                justify-center
                px-5
                py-2
                text-base
                font-semibold
                leading-7
                text-gray-900
                transition-all
                duration-200
                bg-transparent
                border border-gray-900
                rounded-xl
                font-pj
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                hover:bg-gray-900 hover:text-white
                focus:bg-gray-900 focus:text-white
            "
          role="button"
          onClick={connectWallet}
        >
          Connect Wallet
        </a>
      )}
    </>
  );
}

export default ConnectWallet;
