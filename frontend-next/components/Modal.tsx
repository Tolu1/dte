"use client";
import React, { useState } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ children, isOpen, onClose }: ModalProps) {
  //   const [isModalOpen, setIsModalOpen] = useState(isOpen);

  return (
    <>
      {isOpen && (
        <div
          id="wrapper"
          // Added z-40 to elevate the modal above the header
          className="fixed inset-0 z-40 h-full bg-gray-100 bg-opacity-30 backdrop-blur-[3px] flex justify-center items-center"
          onClick={onClose}
        >
          <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
            <div
              className="w-full max-w-sm bg-white shadow-lg rounded-xl"
              onClick={(e) => {
                // do not close modal if anything inside modal content is clicked
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
