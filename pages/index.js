import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from "next/image";
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import { useState } from 'react';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Nifise</title>
      </Head>
      
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className= "min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className='text-xl font-burtons'>Oluwanifise Oguntoye</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill className='curser-pointer text-2xl'/>
                </li>
                <li>
                  <a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
                </li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Oluwanifise Oguntoye</h2>
              <h3 className='text-2xl py-2 md:text-3xl'>University of Toronto Student</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
                  I'm a Mathematics and Statistics Double Major. I have experience with Software Development 
                  and I aspire to get my Masters in Data Science.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
        </section>

        <section>
          <div className='mb-90'>
             <h3 className="text-3xl py-1">About Me</h3>
             <p className='text-md py-2 leading-8 text-gray-800'>
              I started my undergraduate degree as an Accounting major but realized it wasn't 
              the right fit for me so while finding a new career path, I decided to learn python.
              Although I started exploring software development relatively late, 
              I have already built a number of applications and websites that I'm really proud of.
              I'm now a Statistics and Math double major because I would love to work with 
              <span className='text-teal-500'> Machine Learning</span> and 
              <span className='text-teal-500'> Artifical Intelligence</span> in the future.   
             </p>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
          </div> 
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className='basis-1/3 flex-1'>
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="reposnsive"/>
            </div>

          </div>

        </section>

      </main>
    
    </div>
    
  )
}
