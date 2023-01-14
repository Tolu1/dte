import React from "react";
import ConnectWallet from "./ConnectWallet";

type NavbarHamburgerItemProps = {
  label: string;
  href: string;
};

const NavbarHamburgerItem = ({ label, href }: NavbarHamburgerItemProps) => {
  return (
    <a
      href={href}
      title=""
      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
    >
      {" "}
      {label}{" "}
    </a>
  );
};

function NavbarHamburger() {
  return (
    <nav>
      <div className="px-1 py-8">
        <div className="grid gap-y-7">
          <NavbarHamburgerItem label="Causes" href="/causes" />
          <NavbarHamburgerItem label="Shop" href="#" />
          <NavbarHamburgerItem label="Community" href="#" />
          <NavbarHamburgerItem label="About" href="#" />
          <NavbarHamburgerItem label="Dashboard" href="#" />
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
}

export default NavbarHamburger;
