import React, { useContext, useState } from "react";
import Head from "next/head";
import { AppContext } from "@/context/AppContext";
import { CharityContext } from "@/context/CharityContext";
import FormProvider from "@/context/FormContext";
import AddCharity from "@/components/AddCharity";
import { GetServerSideProps } from "next";
import { loadContract } from "@/utils/interactions";
import Charity, { DefaultCharity } from "@/components/Charity";
import DonationProvider from "@/context/DonationContext";
import Modal from "@/components/Modal";
import Donate from "@/components/Donate";

interface Charity {
  id: number;
  name: string;
  mission: string;
  website: string;
  totalDonation: number;
  active: boolean;
  wallet: string;
}

function Causes({ charities }: { charities: Charity[] }) {
  // Modal control for create charity form
  const [showModal, setShowModal] = useState(false);

  const { isOwner } = useContext(AppContext);

  // Modal control for donation modal
  const [showDonationModal, setShowDonationModal] = useState(false);
  const toggleDonationModal = () => setShowDonationModal(!showDonationModal);

  // Charity Id selector
  const [charityIdSelector, setCharityIdSelector] = useState(-1);
  const setCharity = (charityId: number) => {
    setCharityIdSelector(charityId);
  };

  return (
    <div>
      <Head>
        <title>Dress The Earth - Our Causes</title>
        <meta
          name="description"
          content="The Green Charity Transparency Platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormProvider>
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center md:flex md:items-end md:space-x-6 md:justify-between md:text-left">
              <div className="flex-1 max-w-sm mx-auto md:mx-0">
                <h2 className="text-2xl font-bold text-gray-900">
                  Featured Causes 💚
                </h2>
                <p className="mt-4 text-base font-medium text-gray-500">
                  Empower positive impact, explore green communities.
                </p>
              </div>

              <div className="mt-6 md:mt-0">
                {isOwner ? (
                  <button
                    title=""
                    className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                    role="button"
                    onClick={() => setShowModal(true)}
                  >
                    Create Charity
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 px-6 mt-12 sm:mt-16 sm:px-0 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <>
                {/* // @ts-expect-error */}
                {charities.map((charity) => (
                  <Charity
                    key={charity.id}
                    id={charity.id}
                    name={charity.name}
                    mission={charity.mission}
                    website={charity.website}
                    totalDonation={charity.totalDonation}
                    active={charity.active}
                    wallet={charity.wallet}
                    donationProps={{ setCharity, toggleDonationModal }}
                    // toggleModal={toggleDonationModal}
                  />
                ))}
              </>
              <DefaultCharity toggleModal={toggleDonationModal} />
            </div>

            <DonationProvider>
              <Modal isOpen={showDonationModal} onClose={toggleDonationModal}>
                <Donate
                  charityId={charityIdSelector}
                  charity={charities[charityIdSelector]}
                  onClose={toggleDonationModal}
                />
              </Modal>
            </DonationProvider>
            {showModal ? <AddCharity setShowModal={setShowModal} /> : null}
          </div>
        </section>
      </FormProvider>
      <main></main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
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
    props: { charities },
  };
};

export default Causes;
