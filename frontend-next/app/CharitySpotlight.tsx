import React from 'react'

function CharitySpotlight() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 font-pj">Top curated charities. Spotlighting the green effort!</h2>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 sm:space-x-5 sm:flex-row md:order-3 md:mt-16">
                <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                >
                    Request a demo
                </a>

                <a
                    href="#"
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
                        font-pj
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        hover:bg-gray-900
                        focus:bg-gray-900
                        hover:text-white
                        focus:text-white
                        hover:border-gray-900
                        focus:border-gray-900
                    "
                    role="button"
                >
                    Get started for free
                </a>
            </div>

            <div className="relative mt-8 md:mt-16 md:order-2">
                <div className="absolute -inset-1">
                    <div className="w-full h-full max-w-full opacity-30 blur-lg filter" style={{background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"}}></div>
                </div>

                <div className="relative grid max-w-lg grid-cols-1 overflow-hidden border border-gray-200 divide-y divide-gray-200 md:max-w-none md:grid-cols-3 rounded-xl md:divide-x md:divide-y-0">
                    <div className="flex flex-col overflow-hidden">
                        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                            <div className="flex-1">
                                <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/1/waverio-logo.svg" alt="" />
                            </div>

                            <div className="mt-10">
                                <blockquote>
                                    <p className="text-lg text-gray-900 font-pj">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                                </blockquote>
                                <p className="mt-8 text-lg font-bold text-gray-900 font-pj">The Green Climate Fund</p>
                                <p className="mt-1 text-base text-gray-600 font-pj">New York, USA</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col overflow-hidden">
                        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                            <div className="flex-1">
                                <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/1/square-stone-logo.svg" alt="" />
                            </div>

                            <div className="mt-10">
                                <blockquote>
                                    <p className="text-lg text-gray-900 font-pj">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                </blockquote>
                                <p className="mt-8 text-lg font-bold text-gray-900 font-pj">The African Climate Fund</p>
                                <p className="mt-1 text-base text-gray-600 font-pj">Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col overflow-hidden">
                        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                            <div className="flex-1">
                                <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/1/creaty-logo.svg" alt="" />
                            </div>

                            <div className="mt-10">
                                <blockquote>
                                    <p className="text-lg text-gray-900 font-pj">“Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.”</p>
                                </blockquote>
                                <p className="mt-8 text-lg font-bold text-gray-900 font-pj">Earthfund</p>
                                <p className="mt-1 text-base text-gray-600 font-pj">London, UK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


  )
}

export default CharitySpotlight