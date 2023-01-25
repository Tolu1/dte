import React from "react";
import Head from "next/head";
import { Link } from "react-scroll";
import { Courier_Prime } from "@next/font/google";

const courierPrime = Courier_Prime({ weight: "400", subsets: ["latin"] });

function Community() {
  return (
    <>
      <Head>
        <title>Dress The Earth - Community</title>
        <meta
          name="description"
          content="The Green Charity Transparency Platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 font-pj">
              Begin your journey with Dress The Earth
            </h2>
          </div>

          <div className="relative mt-14">
            <div className="absolute -inset-2">
              <div
                className="w-full h-full max-w-4xl mx-auto opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-4xl grid-cols-1 gap-5 mx-auto sm:gap-6 lg:gap-10 sm:grid-cols-2">
              <div className="bg-white shadow-xl rounded-xl">
                <div className="p-8 sm:py-10 sm:px-9">
                  <div className="flex justify-start flex-shrink-0 -space-x-4 overflow-hidden">
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="/images/member1.jpg"
                      alt=""
                    />
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="/images/member2.jpg"
                      alt=""
                    />
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="/images/member3.jpg"
                      alt=""
                    />
                    <div className="inline-flex items-center justify-center bg-gray-100 rounded-full w-14 h-14 ring-2 ring-white">
                      <svg
                        className="w-5 h-5 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
                        />
                      </svg>
                    </div>
                    {/* <p className={courierPrime.className}>the incubator</p> */}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 font-pj mt-11">
                    Join our community
                  </h3>
                  <p className="mt-3 text-base font-normal leading-7 text-gray-600">
                    Join the revolution of like-minded individuals striving to
                    make a difference in the world.
                  </p>

                  <Link
                    to="join"
                    smooth={true}
                    duration={400}
                    title=""
                    className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-bold text-white transition-all duration-200 bg-green border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-opacity-90 rounded-xl"
                    role="button"
                  >
                    Join Now
                  </Link>
                </div>
              </div>

              <div className="bg-white shadow-xl rounded-xl">
                <div className="p-8 sm:py-10 sm:px-9">
                  <div className="flex items-center h-14">
                    <img className="w-auto h-10" src="/images/bag.svg" alt="" />
                    <img
                      className="w-auto h-10 ml-3"
                      src="/images/leaf.svg"
                      alt=""
                    />
                    <img
                      className="w-auto h-10 ml-5"
                      src="/images/plant.svg"
                      alt=""
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 font-pj mt-11">
                    Would you like to volunteer with us?
                  </h3>
                  <p className="mt-3 text-base font-normal leading-7 text-gray-600">
                    Make a real impact in your community by joining our team of
                    volunteers.
                  </p>

                  <a
                    href="https://linktr.ee/dresstheearth"
                    target="_blank"
                    rel="noreferrer"
                    title=""
                    className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-green focus:bg-green hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                    role="button"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="join" className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 font-pj">
              Join 💚 the community
            </h2>
            <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 font-pj">
              Let&apos;s save our Earth, it&apos;s the only planet with
              chocolate.
            </p>
          </div>

          <div className="relative max-w-lg mx-auto mt-14">
            <div className="absolute -inset-x-2 -inset-y-5">
              <div
                className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <form action="#" method="POST" className="relative">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email address"
                className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
                required
              />

              <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
                <button
                  type="submit"
                  className="
                            inline-flex
                            items-center
                            justify-center
                            w-full
                            px-8
                            py-4
                            text-base
                            font-bold
                            text-white
                            transition-all
                            duration-200
                            bg-green
                            border border-transparent
                            sm:w-auto sm:py-3
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            font-pj
                            hover:bg-opacity-90
                            rounded-xl
                        "
                >
                  Get started now
                </button>
              </div>
            </form>
          </div>

          <p className="mt-6 text-sm font-normal text-center text-gray-400 font-pj">
            Reduce. Reuse. Recycle.
          </p>
        </div>
      </section>
    </>
  );
}

export default Community;
