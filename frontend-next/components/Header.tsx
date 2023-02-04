import { useContext, useState } from "react";
import { Plus_Jakarta_Sans } from "@next/font/google";
import { Collapse } from "react-collapse";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarHamburger from "./NavbarHamburger";
import { NavbarContext } from "@/context/NavbarContext";

const pj = Plus_Jakarta_Sans({ subsets: ["latin"] });

function Header() {
  const { expanded, setNavbarExpanded } = useContext(NavbarContext);
  const setExpanded = (expanded: boolean) => {
    setNavbarExpanded(expanded);
  };

  return (
    <header className="fixed top-0 z-30 w-full py-4 lg:py-3 bg-green-soft shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div id="hamburger" className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-900 transition all duration-200 select-none"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {!expanded ? (
                <span
                  className="transition all duration-200 select-none"
                  aria-hidden="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              ) : (
                <span
                  className="transition all duration-200 select-none"
                  aria-hidden="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>

          <Navbar />
        </div>

        <Collapse isOpened={expanded}>
          <NavbarHamburger />
        </Collapse>
      </div>
    </header>
  );
}

export default Header;
