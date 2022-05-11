import React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

import crypto from "../assets/bgCrypto.jpg";
import cardtop1 from "../assets/card1.jpg";
import cardtop2 from "../assets/card2.jpg";
import cardtop3 from "../assets/card3.jpg";

const Blog = () => {
  return (
    <div name="blog" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/100 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={crypto}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            BLOG
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right Coin
          </h3>
          <p className="py-4 text-3xl text-center text-slate-300">
          Bitcoin isn't just about sending money. It has many features and opens many possibilities that the community is still exploring.<br></br>
          Stories from the world’s leading digital asset platform where you have full control of your crypto. 
          </p>
        </div>

        <div className="grid grid-cols-1 mb-42 lg:grid-cols-3 realtive gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <img className="rounded-t-xl" src={cardtop1} alt="/" />
            <div className="p-8">
              <h3 className="font-bold text-2xl my-6">
                Welcome to eMerge Americas, powered by Blockchain.com
              </h3>
              <p className="text-gray-600 text-xl text-ellipsis overflow-hidden max-h-[500px]">
                This week, Miami will welcome 16,000 attendees from more than 40
                countries to eMerge Americas, Miami Tech Month’s flagship event.
                eMerge is a conference that features innovation and
                entrepreneurship across North and South America, bringing
                together government, higher education, startups, investors,
                corporate enterprises and media.<br></br>
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <a
                href="https://www.blockchain.com/blog/welcome-to-emerge-americas-powered-by-blockchain-com-9664f0157fe0/"
                target="_blank"
              >
                <p className="flex items-center text-indigo-600">
                  View More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <img className="rounded-t-xl" src={cardtop2} alt="/" />
            <div className="p-8">
              <h3 className="font-bold text-2xl my-6">
                Pivoting from Web2 to Web3 by Preethi Kasireddy of DappCamp
              </h3>
              <p className="text-gray-600 text-xl">
                DappCamp has partnered with Blockchain.com to provide
                scholarships for underrepresented minorities and women to help
                kick-start their careers in Web3. DappCamp offers a 21-day
                cohort-based course for Web2 developers to make the shift from
                Web2 to Web3 by learning to architect, deploy and scale an app
                on Ethereum.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <a
                href="https://www.blockchain.com/blog/pivoting-from-web2-to-web3-by-preethi-kasireddy-of-dappcamp-7ec0bc08d2eb/"
                target="_blank"
              >
                <p className="flex items-center text-indigo-600">
                  View More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <img className="rounded-t-xl" src={cardtop3} alt="/" />
            <div className="p-8">
              <h3 className="font-bold text-2xl my-6">
                Introducing WalletConnect: Access Web3 from your Blockchain.com
                Wallet
              </h3>
              <p className="text-gray-600 text-xl">
                From the start, we built the Blockchain.com Wallet to provide
                you easy access to crypto without compromising control or
                ownership of your digital assets. This started by giving you an
                easy way to buy, sell, and self-custody Bitcoin. Today, the
                Blockchain.com Wallet is arguably the most popular way to access
                Bitcoin, accounting for one third of all on-chain transactions.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <a
                href="https://www.blockchain.com/blog/introducing-walletconnect-access-web3-from-your-blockchain-com-wallet-da02e49ccea9/"
                target="_blank"
              >
                <p className="flex items-center text-indigo-600">
                  View More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
