import React, { useState } from "react";

const Mission = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl xl:text-5xl font-pj">
            Empowering A Revolution
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Web3 Centered Giving, Become an Earth Dresser
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14">
            <img
              className="w-14 h-14 mx-auto opacity-70"
              src="/images/support.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Support
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We are committed to providing top-notch customer service to ensure
              a smooth experience for our donors in their giving journey.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <img
              className="w-14 h-14 mx-auto"
              src="/images/transparency.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Transparency
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We believe in honesty and integrity in fundraising, ensuring all
              donations go directly to the chosen charity with no hidden fees or
              commissions.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <img
              className="w-14 h-14 mx-auto opacity-[0.85]"
              src="/images/onboarding.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Onboarding
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              The process of donating on our website is simple, connect your
              wallet to start supporting the charities you care about.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <img
              className="w-14 h-14 mx-auto opacity-[0.85]"
              src="/images/product.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Product
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Our platform allows donors to easily give Ethers to a variety of
              reputable charities, all in one convenient location.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img
              className="w-14 h-14 mx-auto"
              src="/images/quality.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Quality
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              We ensure thorough vetting and high standards of accountability
              and impact for all charities featured on our website.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img
              className="w-14 h-14 mx-auto opacity-90"
              src="/images/result.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Result
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              By using our platform, donors can trust that their contributions
              will make a meaningful difference in the lives of those in need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mission;
