import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from "next/image";
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
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
              <h1 className='text-xl font-burtons text-black dark:text-white'>Nifise</h1>
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
              <h2 className='text-5xl py-2 text-pink-600 font-medium dark:text-pink-400 md:text-6xl'>Oluwanifise Oguntoye</h2>
              <h3 className='text-2xl py-2 text-black dark:text-white md:text-3xl'>University of Toronto Student</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto'>
                  I'm a Mathematics and Statistics Double Major. I have experience with Software Development 
                  and I aspire to get my Masters in Data Science.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-white">
              <a target="_blank" href="https://github.com/oluwanifiseoguntoye"><AiFillGithub /></a>
              <a target="_blank" href="https://linkedin.com/in/oluwanifise/"><AiFillLinkedin /></a>
            </div>
        </section>

        <section>
          <div className='mb-90'>
             <h3 className="text-3xl py-1 text-black dark:text-white">About Me</h3>
             <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I started my undergraduate degree as an Accounting major but realized it wasn't 
              the right fit for me so while finding a new career path, I decided to learn python.
              Although I started exploring software development relatively late, 
              I have already built a number of applications and websites that I'm really proud of.
              I'm now a Statistics and Math double major because I would love to work with 
              <span className='text-pink-500'> Machine Learning</span> and 
              <span className='text-pink-500'> Artifical Intelligence</span> in the future.   
             </p>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 text-black dark:text-white mt-20'>Portfolio</h3>
          </div> 
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

          <div className='basis-1/3 flex-1'>
              <Link href={'/myfridge'}>
                <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
              </Link>
            </div>

            <div className='basis-1/3 flex-1'>
              <Link href={'/platinum'}>
                <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
              </Link>
            </div>

          </div>
        </section>

        <section>
          <div className='mt-10'>
            <h3 className="text-3xl py-1 text-black dark:text-white">Get in Touch</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Feel free to reach out to me below with any
              <span className='text-pink-500'> work opportunities</span> and 
              <span className='text-pink-500'> project inquries</span> and I will
              get back to you as soon as possible.
             </p>
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
