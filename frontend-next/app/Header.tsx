import ConnectWallet from "./ConnectWallet";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="w-full bg-green-rich">
      <div className="relative container p-5 mx-auto text-white">
        {/* Flex Container*/}
        <div className="flex items-center justify-between">
          <Logo />
          <Navbar />
          <ConnectWallet />
        </div>
      </div>
    </div>
  )
}

export default Header;