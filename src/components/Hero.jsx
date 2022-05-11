import React from "react";
import {
  CubeTransparentIcon,
  ArrowCircleDownIcon,
  GlobeIcon,
  LightningBoltIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";
import btc from "../assets/bitcoin-img.svg"
const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-xl mt-10 md:-mt-10'>Welcome to the Decentralized World</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Blockchain FTW</h1>
                <button className='py-3 px-6 sm:w-[60%] my-4'>
                  <a href="https://bitcoin.org/en/getting-started" target="_blank" rel="noreferrer">Get Started</a></button>
            </div>
            <div>
                <img className=' md:ml-24 -mt-20  lg:mt-16' src={btc} alt="/" />
            </div>
            <div className='absolute py-8  md:min-w-[800px] bottom-[5%]
            md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-2xl '>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><LightningBoltIcon className='h-6 text-indigo-600' /> Faster transactions</p>
                    <p className='flex px-4 py-2 text-slate-500'><GlobeIcon className='h-6 text-indigo-600' /> Worldwide payments</p>
                    <p className='flex px-4 py-2 text-slate-500'><ArrowCircleDownIcon className='h-6 text-indigo-600' /> Low processing fees</p>
                    <p className='flex px-4 py-2 text-slate-500'><CubeTransparentIcon className='h-6 text-indigo-600' /> Decentralized</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero