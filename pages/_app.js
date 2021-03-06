/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-purple-900 ">
      <nav className="border-b p-6 bg-emerald-700">
        <p className="text-4xl font-bold text-center">NFT Marketplace</p>
        <div className="flex mt-4 justify-center items-center">
          <Link href="/">
            <a className="mr-4 text-500 bg-yellow-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-full">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-500 bg-yellow-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-full">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-500 bg-yellow-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-full">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-500 bg-yellow-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-none rounded-3xl">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp