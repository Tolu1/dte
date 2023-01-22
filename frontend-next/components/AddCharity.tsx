"use client";
import React, { useContext, useState } from "react";
import { FormContext } from "@/context/FormContext";
import { useRouter } from "next/router";

function AddCharity({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { handleChange, handleSubmit } = useContext(FormContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleSubmitForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsSubmitting(true);
    await handleSubmit(e);
    refreshData();
    setShowModal(false);
    setIsSubmitting(false);
  };

  return (
    // TODO: Make a separate Modal component and pass children into it for more reusabilty
    <div
      id="wrapper"
      // Added z-40 to elevate the modal above the header
      className="fixed inset-0 z-40 bg-gray-100 bg-opacity-30 backdrop-blur-[3px] flex justify-center items-center"
      onClick={() => setShowModal(false)}
    >
      <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
        <div
          className="w-full max-w-sm bg-white shadow-lg rounded-xl"
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <div className="px-4 py-5 sm:p-6">
            <p className="text-xl font-bold text-gray-900">Create Charity</p>
            <p className="mt-3 text-sm font-medium text-gray-500">
              Only admins are allowed to add a new charity organization.
            </p>

            <div className="mt-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="" className="text-sm font-bold text-gray-900">
                    {" "}
                    Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Rain & Earth"
                      className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      onChange={(e) => handleChange(e, e.currentTarget.name)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-sm font-bold text-gray-900">
                    {" "}
                    Mission{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="mission"
                      id=""
                      placeholder="Sustainable Agriculture"
                      className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      onChange={(e) => handleChange(e, e.currentTarget.name)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-sm font-bold text-gray-900">
                    {" "}
                    Website{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="website"
                      id=""
                      placeholder="www.sustainableagric.org"
                      className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      onChange={(e) => handleChange(e, e.currentTarget.name)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-sm font-bold text-gray-900">
                    {" "}
                    Wallet Address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="wallet"
                      id=""
                      placeholder="0x00000000000000000000000000000000"
                      className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      onChange={(e) => handleChange(e, e.currentTarget.name)}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4 space-x-5">
                    <label
                      htmlFor="activate-checkbox"
                      className="ext-sm font-bold text-gray-900"
                    >
                      Activate now
                    </label>
                    <input
                      id="activate-checkbox"
                      type="checkbox"
                      name="active"
                      value=""
                      className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-2  focus:ring-indigo-600 focus:border-indigo-600 caret-indigo-600"
                      onChange={(e) => handleChange(e, e.currentTarget.name)}
                    />
                  </div>
                </div>

                {/* <div>
                  <label htmlFor="" className="text-sm font-bold text-gray-900">
                    {" "}
                    Activate Charity{" "}
                  </label>
                  <div className="mt-2">
                    <select className="block w-full py-3 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div> */}
              </div>

              <div className="flex items-center justify-end mt-5 space-x-4">
                <button
                  type="reset"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                {!isSubmitting ? (
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                    onClick={(e) => handleSubmitForm(e)}
                  >
                    Add
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500 cursor-not-allowed pointer-events-none"
                  >
                    Add
                  </button>
                )}
                {/* <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                  onClick={(e) => handleSubmitForm(e)}
                >
                  Add
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCharity;
