import Link from 'next/link'
import React from 'react'
import {  AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"

export default function Footer({ copyright }:any) {
  return (
    <div className="grid mt-auto py-5 text-primary-950 transition-all dark:bg-primary-950 dark:text-primary-200">
      <div className="container">
      <div className='block md:flex justify-between'>
        <div className='grid'>
        <p>
       <span> <a href="/privacy" className="text-base">Privacy Policy</a></span>
         </p>
        </div>
        <div className="flex items-center space-x-4 text-xl">
          <Link href={'https://twitter.com/evanator77'}>  
          <span className='sr-only'>Twitter</span>    
          <AiOutlineTwitter/>
          </Link>
          <Link href={'https://github.com/wangaevans'}>  
          <span className='sr-only'>Github</span>    
          <AiOutlineGithub/>
          </Link>
        </div>
      </div>
      <p className="text-left md:text-center text-sm">{copyright}</p>
    </div>
    </div>
  )
}
