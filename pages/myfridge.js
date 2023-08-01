import React from 'react'
import Head from 'next/head'
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link';
import {AiFillGithub} from 'react-icons/ai'
import Image from 'next/image';
import web9 from "../public/web9.png"
import web10 from "../public/web10.png"

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
              <h2 className='text-5xl py-2 text-pink-600 font-medium dark:text-pink-400 md:text-6xl'>Full Stack Recipe Chatbot</h2>
              <h3 className='text-2xl py-2 text-black dark:text-white md:text-3xl'>My Fridge</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-l max-w-l mx-auto'>
                  For my first full stack project, I worked on a recipe chatbot that was largely inspired by OpenAi's Chat GPT. I really wanted
                  to replicate its usability but to a specific section. I designed and developed the application using Django and React, 
                  implementing Django Rest Framework for seamless communication between the frontend and backend. To replicate Chat GPT's ability 
                  conversational abilities, I leveraged the Natural Language Toolkit (NLTK) to enable natural language processing, 
                  allowing the chatbot to generate contextually appropriate responses. Then for the recipes, I web scraped thousands of recipes and 
                  imported them into an SQL database for efficient data retrieval. Finally, I created an admin page using Algolia for intuitive recipe search and sorting.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-white">
              <a target="_blank" href="https://github.com/oluwanifiseoguntoye/MyFridge-frontendChatbot"><AiFillGithub /></a>
              <a target="_blank" href="https://github.com/oluwanifiseoguntoye/MyFridge-backendAPI"><AiFillGithub /></a>
            </div>

        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 text-black dark:text-white mt-20'>Images from the application</h3>
          </div> 
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className='basis-1/3 flex-1'>
                <Image src={web10} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
                <Image src={web9} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
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