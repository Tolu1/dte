import Link from "next/link";
import React from "react";

function CharitySpotlight() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 font-pj">
              Top curated charities. Spotlighting the green effort!
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
              Meet our top favorite charities of the week
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-8 sm:space-x-5 sm:flex-row md:order-3 md:mt-16">
            <a
              href="https://linktr.ee/dresstheearth"
              target="_blank"
              rel="noreferrer"
              title=""
              className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-green border-2 border-transparent sm:w-auto rounded-xl shadow-md font-pj hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Add your charity
            </a>

            <Link
              href="/causes"
              title=""
              className="
                        inline-flex
                        items-center
                        justify-center
                        w-full
                        px-6
                        py-3
                        mt-4
                        text-lg
                        font-bold
                        text-gray-900
                        transition-all
                        duration-200
                        border-2 border-gray-400
                        sm:w-auto sm:mt-0
                        rounded-xl
                        shadow-md
                        font-pj
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        hover:bg-green
                        focus:bg-green
                        hover:bg-opacity-90
                        hover:text-white
                        focus:text-white    
                        focus:border-gray-900
                    "
              role="button"
            >
              Get started now
            </Link>
          </div>

          <div className="relative mt-8 md:mt-16 md:order-2">
            <div className="absolute -inset-1">
              <div
                className="w-full h-full max-w-full opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 overflow-hidden border border-gray-200 divide-y divide-gray-200 md:max-w-none md:grid-cols-3 rounded-xl md:divide-x md:divide-y-0">
              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                  <div className="flex-1">
                    <a
                      href="https://sustyvibes.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="w-auto h-9"
                        src="/images/sustyvibes.png"
                        alt="sustyvibes"
                      />
                    </a>
                  </div>

                  <div className="mt-10">
                    <blockquote>
                      <p className="text-lg text-gray-900 font-pj">
                        “Young people with a passion for a just world come
                        together to connect and design new ways of living”
                      </p>
                    </blockquote>
                    <p className="mt-8 text-lg font-bold text-gray-900 font-pj">
                      Sustyvibes
                    </p>
                    <p className="mt-1 text-base text-gray-600 font-pj">
                      Ibadan, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                  <div className="flex-1">
                    <a
                      href="https://reswaye.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="w-auto h-16"
                        src="/images/reswaye.png"
                        alt="reswaye"
                      />
                    </a>
                  </div>

                  <div className="mt-10">
                    <blockquote>
                      <p className="text-lg text-gray-900 font-pj">
                        “RESWAYE is one of the biggest women-network recyclers
                        on the coastline of the West Africa continent”
                      </p>
                    </blockquote>
                    <p className="mt-8 text-lg font-bold text-gray-900 font-pj">
                      RESWAYE
                    </p>
                    <p className="mt-1 text-base text-gray-600 font-pj">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                  <div className="flex-1">
                    <a
                      href="https://ecobarter.africa"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="w-auto h-10"
                        src="images/ecobarter.png"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="mt-10">
                    <blockquote>
                      <p className="text-lg text-gray-900 font-pj">
                        “Earn points every time you recycle with us to redeem
                        either as cash, health insurance”
                      </p>
                    </blockquote>
                    <p className="mt-8 text-lg font-bold text-gray-900 font-pj">
                      Ecobarter
                    </p>
                    <p className="mt-1 text-base text-gray-600 font-pj">
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharitySpotlight;
