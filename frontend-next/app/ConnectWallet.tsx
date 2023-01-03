import Link from 'next/link'
import React from 'react'

function ConnectWallet() {
  return (
    <div className="p-2 px-6 pt-2 text-white bg-green rounded-xl text-sm hover:bg-green-hover">
      <Link href="#">Connect Wallet</Link>
    </div>
  )
}

export default ConnectWallet