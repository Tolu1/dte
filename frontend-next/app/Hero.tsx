function Hero() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
          <div className="flex flex-col justify-between lg:order-2">
            <div className="flex-1">
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-green rounded-xl bg-green-soft">
                {" "}
                # The Green Charity Transparency Platform{" "}
              </span>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-7xl sm:tracking-tight">
                Dress Mother Earth in Green.☘️
              </h1>
            </div>
            <div className="mt-6 lg:mt-auto">
              <p className="text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                💚Join the green revolution, make a difference. Donate in ether,
                win NFTs with amazing benefits for eco-friendly shopping, and
                help make the world a better place.💚
              </p>
              <div className="mt-10">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-green border border-transparent rounded-xl hover:bg-green-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-rich"
                  role="button"
                >
                  Make a Donation Today
                </a>
              </div>
            </div>
          </div>

          <div className="lg:order-1">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute -inset-1">
                <div
                  className="w-full h-full max-w-full opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>
              <img
                className="relative w-full max-w-xs mx-auto sm:max-w-sm rounded-2xl"
                src="/images/woman.jpeg"
                alt=""
              />

              <div className="absolute bottom-0 left-0 mb-12 -ml-2 bg-white shadow-2xl sm:mb-24 sm:-ml-24 lg:-ml-12 xl:-ml-24 w-72 rounded-2xl">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-start">
                    <img
                      src="/images/ethereum.svg"
                      height="22px"
                      width="22px"
                    />
                    <div className="ml-4">
                      <p className="text-3xl font-semibold text-gray-900">
                        0.0000219
                      </p>
                      <p className="mt-1 text-lg font-normal text-gray-700">
                        {" "}
                        ETH in donations was sent just now!
                      </p>
                    </div>
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

export default Hero;
