"use client";
import React, { useState } from 'react';
import AddCharity from './AddCharity';

const Charity = () => {
  return (
    <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 rounded-lg hover:shadow-lg hover:-translate-y-1">
        <div className="p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img className="object-cover w-5 h-5 rounded-full shrink-0" src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/10/author.png" alt="" />
                    <a href="#" title="" className="ml-2 text-sm font-medium text-gray-900"> 0xDD...2E08 </a>
                </div>

                <span className="px-2 py-1.5 text-xs font-medium text-white rounded bg-red-400"> Inactive </span>
            </div>

            <a href="#" title="" className="block mt-4 overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
                <img className="object-cover w-full h-full" src="https://cdn.pixabay.com/photo/2016/11/29/08/51/forest-1868529_960_720.jpg" alt="" />
            </a>

            <div className="mt-4">
                <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-500">Top Pick</p>
                    <div className="relative top-[-3px]">
                        <img className="w-5 h-5 " src="/images/fire.gif" alt="fire" />
                    </div>
                </div>
                <p className="mt-2 text-base font-bold text-gray-900">
                    <a href="#" title=""> The African Climate Fund </a>
                </p>
                <p className="mt-2 text-sm font-medium text-green">Total Donation 2.301 ETH</p>
            </div>

            <div className="flex items-center justify-between mt-4 space-x-4">
                <button
                    type="button"
                    className="md:whitespace-nowrap inline-flex items-center justify-center w-full px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded md:px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                >
                    See More
                </button>

                <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-3 py-2 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-green border border-transparent rounded md:px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                >
                    Donate
                </button>
            </div>
        </div>
    </div>
  )
}

const CharityList = () => {   
  
    const [showModal, setShowModal] = useState(false);
  
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center md:flex md:items-end md:space-x-6 md:justify-between md:text-left">
                    <div className="flex-1 max-w-sm mx-auto md:mx-0">
                        <h2 className="text-2xl font-bold text-gray-900">Featured Charities 💚</h2>
                        <p className="mt-4 text-base font-medium text-gray-500">Explore positive impact, empower green communities.</p>
                    </div>

                    <div className="mt-6 md:mt-0">
                        <button
                            title=""
                            className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                            role="button"
                            onClick={() => setShowModal(true)}
                        >
                            Create Charity
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 px-6 mt-12 sm:mt-16 sm:px-0 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    <Charity />
                    <Charity />
                    <Charity />
                    <Charity />

                </div>
                {showModal 
                  ? <AddCharity setShowModal={setShowModal}/>

                  : null
                }
            </div>
        </section>

    )
}
export default CharityList;