import Head from "next/head";
import { GetServerSideProps } from "next";
import Hero from "@/components/Hero";
import CharitySpotlight from "@/components/CharitySpotlight";
import Mission from "@/components/Mission";
import { CONTRACT_ADDRESS } from "utils/constants";

const ETHER_SCAN_API_KEY = process.env.ETHER_SCAN_API_KEY;

export default function Home({
  latestDonationValue,
}: {
  latestDonationValue: number;
}) {
  return (
    <>
      <Head>
        <title>Dress The Earth - The Green Revolution</title>
        <meta
          name="description"
          content="The Green Charity Transparency Platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero latestDonationValue={latestDonationValue} />
        {/* <CharitySpotlight /> */}
        {/* <Mission /> */}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // NOTE: change API in production!
  let latestDonationValue: number = 0;
  const url = `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${CONTRACT_ADDRESS}&startblock=0&endblock=99999999&sort=desc&apikey=${ETHER_SCAN_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const donations = data.result.filter((tx: any) => {
      return tx.functionName.startsWith("donate");
    });
    const latestDonation = donations[0];
    latestDonationValue = latestDonation.value;
  } catch (err) {
    console.log(err);
  }

  return {
    props: { latestDonationValue },
  };
};
