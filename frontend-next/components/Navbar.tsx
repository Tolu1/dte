import React from "react";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

type NavbarItemProps = {
  label: string;
  href: string;
};

const NavbarItem = ({ label, href }: NavbarItemProps) => {
  return (
    <Link
      href={href}
      title=""
      className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
    >
      {" "}
      {label}{" "}
    </Link>
  );
};

function Navbar() {
  return (
    <>
      <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">
        <NavbarItem label="Causes" href="/causes" />
        <NavbarItem label="Shop" href="/shop" />
        {/* <NavbarItem label="Community" href="/community" /> */}
        {/* <NavbarItem label="About" href="/about" /> */}
      </nav>
      <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
        <NavbarItem label="Dashboard" href="/dashboard" />
        <ConnectWallet />
      </nav>
    </>
  );
}

export default Navbar;
