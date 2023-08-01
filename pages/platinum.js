import React from 'react'
import Head from 'next/head'
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link';
import {AiFillGithub} from 'react-icons/ai'
import Image from 'next/image';
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import web7 from "../public/web7.png"

function project() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Nifise</title>
        <link rel="icon" href="/avatar.png"></link>
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className= "min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <Link href={'/'}>
                <h1 className='text-xl font-burtons text-black dark:text-white'>Nifise</h1>
              </Link>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='curser-pointer text-black dark:text-white text-2xl'/>
                </li>
                <li>
                  <a className=" bg-gradient-to-r from-pink-600 to-pink-400 text-white px-4 py-2 rounded-md ml-8" target="_blank" href="https://docs.google.com/document/d/1MYLfyYoiamJ6VPnXs4gcAZR4qSsMW6q-L-Zqc315vU8/edit?usp=sharing">Resume</a>
                </li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-pink-600 font-medium dark:text-pink-400 md:text-6xl'>Online Storefront For My Clothing Brand</h2>
              <h3 className='text-2xl py-2 text-black dark:text-white md:text-3xl'>Be Platinum</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-l max-w-l mx-auto'>
                  In Summer 2023, I decided to make my own clothing brand. Typically, clothing brand owners use Shopify to make their 
                  store fronts but I wanted to impliment the MERN stack to build my own store front from top to bottom. I utilized React components 
                  and React Router DOM to showcase an extensive product catalog, ensuring an engaging browsing experience for customers. 
                  With robust password encryption with bcrypt and JWT authentication, I made sure to guarantee the safety of user credentials. 
                  I also added the implementation of distinct user and admin roles, which was also fortified by bcrypt and JWT, 
                  and it enabled me to authorized access to manage products, orders, and essential tasks. 
                  The backend, powered by Node.js and Express, efficiently handles requests, with MongoDB ensuring seamless data storage and retrieval. 
                  I also built the website with a mobile-first design to ensure optimal reposnsiveness on all devices. 
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-white">
              <a target="_blank" href="https://github.com/oluwanifiseoguntoye/platinum"><AiFillGithub /></a>
            </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 text-black dark:text-white mt-20'>Images from the store</h3>
          </div> 
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className='basis-1/3 flex-1'>
                <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
                <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
                <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
                <Image src={web7} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
                <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
            </div>

          </div>
        </section>

        <section>
          <footer className='mt-20 text-center'>
              <h3 className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
                  2023 Oluwanifise Oguntoye
              </h3>
          </footer>
        </section>

      </main>
    </div>
  )
}

export default project