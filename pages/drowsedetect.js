import React from 'react'
import Head from 'next/head'
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link';
import {AiFillGithub} from 'react-icons/ai'
import Image from 'next/image';
import drowsy from "../public/drowsy.png"
import awake from "../public/awake.png"

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
              <h2 className='text-5xl py-2 text-pink-600 font-medium dark:text-pink-400 md:text-6xl'>Deep Drowsiness Detection using YOLO and Pytorch</h2>
              <h3 className='text-2xl py-2 text-black dark:text-white md:text-3xl'>DrowseDetect</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-l max-w-l mx-auto'>
                  I developed a deep drowsiness detection system using PyTorch, YOLO, and Python, aimed at detecting whether individuals 
                  are awake or asleep in real-time. For data collection, I gathered a diverse dataset comprising images of myself and 
                  other individuals found on the internet, which I labeled as awake or asleep. I used the power of YOLO as the base model,
                  I fine-tuned and customized it to suit the specific requirements of drowsiness detection. To visualize the model's predictions, 
                  I employed Matplotlib, which enabled me to interpret the system's results efficiently. This was the most interesting thing
                  I believe I've taken on and I hope to gather more knowledge in this topic in the coming years so I can build a self-automated traffic system.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-white">
              <a target="_blank" href="https://github.com/oluwanifiseoguntoye/drowsedetect"><AiFillGithub /></a>
            </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 text-black dark:text-white mt-20'>Images from the model</h3>
          </div> 
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className='basis-1/3 flex-1'>
                <Image src={awake} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
            </div> 

            <div className='basis-1/3 flex-1'>
                <Image src={drowsy} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
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