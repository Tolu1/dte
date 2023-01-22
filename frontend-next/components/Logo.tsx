import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" title="" className="flex items-center space-x-1">
      <img className="w-6 h-6" src="/images/logo.svg" alt="" />
      <h1 className=" font-inter text-green-rich font-semibold tracking-wider">
        &#124;DRESS THE EARTH&#124;
      </h1>
    </Link>
  );
}

export default Logo;
