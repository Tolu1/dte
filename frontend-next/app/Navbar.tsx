import React from "react"
import ConnectWallet from "./ConnectWallet"

type NavbarItemProps = {
  label: string;
  href: string;
}

const NavbarItem = ({label, href}: NavbarItemProps) => {
  return (
    <a href={href} title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> {label} </a>
  )
}

function Navbar() {
  return (
    <>
      <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">
          <NavbarItem label="Causes" href="/causes" />
          <NavbarItem label="Shop" href="#" />
          <NavbarItem label="Community" href="#" />
          <NavbarItem label="About" href="#" /> 
      </nav>
      <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
          <NavbarItem label="Dashboard" href="#" /> 
          <ConnectWallet />
      </nav>
    </>
  )
}

export default Navbar