"use client";
import { useEffect, useState } from "react"
import { Collapse } from "react-collapse"
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarHamburger from "./NavbarHamburger";

function Header() {

  const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     const element = document.getElementById("hamburger");
//     if (element) {
//         const observer = new MutationObserver(mutations => {
//             mutations.forEach(mutation => {
//                 if ((mutation.target as HTMLElement).style.display !== "none") {
//                     setExpanded(true);
//                 } else {
//                     setExpanded(false);
//                 }
//             });
//         });
//         observer.observe(element, { attributes: true });
//         return () => observer.disconnect();
//     }
//   }, []);

  return (
    <header className="fixed top-0 z-30 w-full py-4 bg-green-soft shadow-lg">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                
                <div className="flex-shrink-0">
                    <Logo />
                </div>

                <div id="hamburger" className="flex lg:hidden">
                    <button type="button" className="text-gray-900" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                        {!expanded
                            ?   <span aria-hidden="true">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </span>
                            :    <span aria-hidden="true">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                        }
                    </button>
                </div>

                <Navbar />
            </div>

            <Collapse isOpened={expanded}>
                <NavbarHamburger />
            </Collapse>
        </div>
    </header>

  )
}

export default Header;