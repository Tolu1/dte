import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-900 text-body py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/4">
            <Link href="/">
              <div className="text-2xl font-bold hover:text-green-500">
                MyCompany
              </div>
            </Link>
            <p className="mt-6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <ul className="list-none text-sm">
              <li className="flex items-center mb-4">
                <FaMapMarker className="mr-2" />
                123 Main Street, Anytown, USA
              </li>
              <li className="flex items-center mb-4">
                <FaPhone className="mr-2" />
                (123) 456-7890
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                info@mycompany.com
              </li>
            </ul>
          </div>
          <div className="md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
          <ul className="list-none text-sm">
          <li className="flex items-center mb-4">
          <img
                         src="/thumbnail-1.jpg"
                         alt="Recent post thumbnail"
                         className="w-8 h-8 rounded-full mr-4"
                       />
          <a href="#" className="text-gray-400 hover:text-white">
          Lorem ipsum dolor sit amet
          </a>
          </li>
          <li className="flex items-center">
          <img
                         src="/thumbnail-2.jpg"
                         alt="Recent post thumbnail"
                         className="w-8 h-8 rounded-full mr-4"
                       />
          <a href="#" className="text-gray-400 hover:text-white">
          Consectetur adipiscing elit
          </a>
          </li>
          </ul>
          </div>
          <div className="md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Join our Newsletter</h3>
          <form
                     action="#"
                     method="POST"
                     className="flex flex-col items-start"
                   >
          <label htmlFor="email" className="text-sm mb-2">
          Email
          </label>
          <input
                       type="email"
                       id="email"
                       name="email"
                       className="py-2 px-4 rounded-full w-full"
                     />
          <button
          type="submit"
          className="mt-4 bg-green-500 hover:bg-600 text-white font-bold py-2 px-4 rounded-full"
          >
          Subscribe
          </button>
          </form>
          </div>
          </div>
          </div>
          <div className="container mx-auto px-4 mt-12 border-t border-gray-800 pt-4">
          <p className="text-center text-xs">
          © {year} MyCompany. All rights reserved.
          </p>
          </div>
          </footer>
          
  )
}

export default Footer