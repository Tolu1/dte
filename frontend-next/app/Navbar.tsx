import React from "react"
import NavbarItem from "./NavbarItem"

function Navbar() {
  return (

    <nav>
      <ul className="hidden space-x-6 md:flex">
        <NavbarItem label="Donate" href="/donate" />
        <NavbarItem label="NFTs" href="#" />
        <NavbarItem label="Marketplace" href="#" />
        <NavbarItem label="Community" href="#" />
        <NavbarItem label="About" href="#" />
      </ul>
    </nav>
  )
}

export default Navbar