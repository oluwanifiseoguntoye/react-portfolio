import React from 'react'
import Head from 'next/head'
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link';
import {AiFillGithub, AiOutlineLineChart} from 'react-icons/ai'
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
              <h2 className='text-5xl py-2 text-pink-600 font-medium dark:text-pink-400 md:text-6xl'>Youtube Data Dashboard with Streamlit</h2>
              <h3 className='text-2xl py-2 text-black dark:text-white md:text-3xl'>Made with: Pandas, Numpy & Plotly</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-l max-w-l mx-auto'>
              In this data visualization project, I developed an interactive Streamlit dashboard to analyze metrics from the YouTube channel 'Ken Jee.' 
              By utilizing Pandas and NumPy, I performed data preprocessing, computed aggregated metrics like views, comments, likes, subscribers, shares, 
              RPM, and engagement ratio, and calculated percentage changes over time. For deeper insights, I employed pivot tables to extract daily 
              view data for the first 30 days after video publication, computing metrics such as mean, median, and percentiles. Interactive line charts 
              using Plotly showcased viewership trends. The dashboard also provides individual video analysis with dynamic bar charts revealing the country 
              that generates the most views. Additionally, using cumulative view counts, the dashboard compared video performance in the first 30 days to other 
              videos on the channel.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-white">
              <a target="_blank" href="https://github.com/oluwanifiseoguntoye/youtube_streamlit_dashboard/"><AiFillGithub /></a>
              <a target="_blank" href="https://oluwanifiseoguntoye-youtube-streamlit-dash-ken-dashboard-e193np.streamlit.app/"><AiOutlineLineChart /></a>
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