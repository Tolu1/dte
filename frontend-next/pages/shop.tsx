import React, { useState } from "react";
import Head from "next/head";
import Modal from "@/components/Modal";

function Shop() {
  // Modal control for information
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => setShowModal(true);

  return (
    <>
      <Head>
        <title>Dress The Earth - Shop With Us</title>
        <meta
          name="description"
          content="The Green Charity Transparency Platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Our Eco-friendly Products💚
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 sm:mt-12 sm:gap-6 lg:grid-cols-4">
            <div className="relative flex flex-col overflow-hidden bg-white rounded-xl group">
              <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-1.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                  Kids Dress
                </p>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
                  <a href="#" title="">
                    Kiddo Winter Boys Jacket
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
                  $19.93
                </p>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden bg-white rounded-xl group">
              <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-2.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                  Winter collection
                </p>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
                  <a href="#" title="">
                    Terius Winter Gray Hat for Child
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
                  $24.58
                </p>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden bg-white rounded-xl group">
              <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-3.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                  Men Dress
                </p>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
                  <a href="#" title="">
                    Adidas Men&apos;s Kaptir Super Trail
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
                  $49.19
                </p>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden bg-white rounded-xl group">
              <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-4.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                  Shoe
                </p>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
                  <a href="#" title="">
                    New Balance Women&apos;s 481 V3
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
                  $16.00
                </p>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden bg-white rounded-xl group">
              <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-5.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                  Winter Collection
                </p>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
                  <a href="#" title="">
                    Adidas Child Kaptir Super Trail
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
                  $23.88
                </p>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden bg-white rounded-xl group">
              <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-6.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                  Ladies dress
                </p>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
                  <a href="#" title="">
                    Kiddo Winter Boys Jacket
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
                  $34.99
                </p>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden bg-white rounded-xl group">
              <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-7.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                  Fashion
                </p>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
                  <a href="#" title="">
                    Columbia Ladies Bag
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
                  $14.93
                </p>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden bg-white rounded-xl group">
              <div className="flex-shrink-0 overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/3/product-8.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                  Kids Dress
                </p>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 mt-2.5">
                  <a href="#" title="">
                    HappyMom Winter Boys Jacket
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-bold mt-2.5">
                  $24.19
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal overlayHeader={false} isOpen={showModal} onClose={handleClose}>
        <div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="mt-5 text-xl font-bold text-gray-900">
                We apologize
              </p>
              <p className="mt-3 text-sm font-medium text-gray-500">
                The Shop feature is not currently available in your country. We
                are working to bring it to your region as soon as possible.
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-green-600 transition-all duration-200 bg-green-soft border border-transparent rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-600 cursor-not-allowed pointer-events-none"
                >
                  Were Sorry!
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Shop;
