import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <div className="pt-2">
      <Link href="/">
        {/* <Image src="/images/logo.png" alt="logo" width="136" height="56" /> */}
        <Image src="/images/logo.png" alt="logo" width="102" height="42" />
      </Link>
   </div>
  )
}

export default Logo