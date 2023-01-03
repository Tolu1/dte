import Link from "next/link"
import { ReactNode } from "react";
import { NavbarItemProps } from "../typings";

// function NavbarItem({label: string, href: string}) {
//   return (
//     <li>
//       <Link href={href}>{label}</Link>
//     </li>
//   );
// }

function NavbarItem({label, href}: NavbarItemProps) {
  return (
    <li className="border-b-4 border-b-green-rich hover:border-b-4 hover:border-b-green transition duration-100 ease-in-out">
      <Link href={href}>{label}</Link>
    </li>
  );
}

export default NavbarItem