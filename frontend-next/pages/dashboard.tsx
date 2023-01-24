import React, { useContext } from "react";
import DashboardHighlight from "@/components/DashboardHighlight";
import DashboardDonations from "@/components/DashboardDonations";
import { CONTRACT_ADDRESS } from "utils/constants";
import { GetServerSideProps } from "next";
import { AppContext } from "@/context/AppContext";
import sleep from "sleep-promise";
import { loadContract } from "@/utils/interactions";
import { Charity } from "@/typings";

const ETHER_SCAN_API_KEY = process.env.ETHER_SCAN_API_KEY;

function Dashboard({
  donations,
  txinternal,
  charities,
}: {
  donations: any[];
  txinternal: any[];
  charities: Charity[];
}) {
  const { connected, account } = useContext(AppContext);

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="py-6">
        <div className="px-4 mx-auto sm:px-6 md:px-8">
          <div className="md:items-center md:flex">
            <p className="text-base font-bold text-gray-800">Hello, You -</p>
            <p className="mt-1 text-base font-medium text-gray-500 md:mt-0 md:ml-2">
              here&apos;s what&apos;s happening on Dress The Earth
            </p>
          </div>
        </div>

        <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
          <div className="space-y-5 sm:space-y-6">
            <DashboardHighlight donations={donations} />
            <DashboardDonations
              donations={donations}
              txinternal={txinternal}
              charities={charities}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // NOTE: change API in production!
  let donations: any[] = [];

  try {
    const url = `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${CONTRACT_ADDRESS}&startblock=0&endblock=99999999&sort=desc&apikey=${ETHER_SCAN_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    donations = data.result.filter((tx: any) => {
      return tx.functionName.startsWith("donate");
    });
  } catch (err) {
    console.log(err);
  }

  // Delay because of limit on API
  let txinternal: any[] = [];
  await sleep(900);
  try {
    const url = `https://api-goerli.etherscan.io/api?module=account&action=txlistinternal&address=${CONTRACT_ADDRESS}&startblock=0&endblock=99999999&sort=desc&apikey=${ETHER_SCAN_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    txinternal = data.result;
    console.log(txinternal);
  } catch (err) {
    console.log(err);
  }

  let charities: Charity[] = [];
  try {
    const contract = loadContract();
    const count = await contract?.charityIdCounter();
    console.log(`count: ${count}`);

    // Fetch all charities
    for (let i = 0; i < count; i++) {
      // Fetch charity by ID since ID is the same as index
      const charity = await contract?.charities(i);

      // Parse charity data
      charities.push({
        id: i,
        name: charity.name,
        mission: charity.mission,
        website: charity.website,
        totalDonation: charity.totalDonation.toString(), // conversion from BN for successful serialization
        active: charity.active,
        wallet: charity.wallet.toLowerCase(),
      });
    }
    console.log(charities);
  } catch (err) {
    console.log(err);
  }

  return {
    props: { donations, txinternal, charities },
  };
};

export default Dashboard;
