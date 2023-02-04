import React, { createContext, useState } from "react";

export const NavbarContext = createContext({
  expanded: false,
  setNavbarExpanded: (expanded: boolean) => {},
});

function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const setNavbarExpanded = (expanded: boolean) => {
    setExpanded(expanded);
  };

  return (
    <NavbarContext.Provider value={{ expanded, setNavbarExpanded }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarProvider;
