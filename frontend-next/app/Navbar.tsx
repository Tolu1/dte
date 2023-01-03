import React from "react"
import NavbarItem from "./NavbarItem"

function Navbar() {
  return (

    <nav>
      <ul className="hidden md:flex space-x-6">
        <NavbarItem label="Donate" href="#" />
        <NavbarItem label="NFTs" href="#" />
        <NavbarItem label="Marketplace" href="#" />
        <NavbarItem label="Community" href="#" />
        <NavbarItem label="About" href="#" />
      </ul>
    </nav>
  )
}

export default Navbar