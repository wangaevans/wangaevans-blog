'use client'
import React, { useState } from 'react'
import ThemeToggle from '../theme/theme-toggle'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  links: {
    title: string
    href: string
  }[]
  branding: {
    name: string
    description: string
    icon: string
    image: string
  }
}

export default function Navbar({ links, branding }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    if (!isOpen) setIsOpen(true)
    else setIsOpen(!true)
  }
  return (
<nav className="bg-primary-100 dark:bg-primary-950 sticky w-full z-20 top-0 left-0 border-b border-primary-200 dark:border-primary-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{branding.name}</span>
    </a>
    <div className="flex md:order-2">
  <ThemeToggle className="mr-4 text-xl" />

      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-500 rounded-lg md:hidden hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:text-primary-400 dark:hover:bg-primary-700 dark:focus:ring-primary-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-primary-100 rounded-lg bg-primary-100 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-primary-800 md:dark:bg-primary-900 dark:border-primary-700">
      
               {links.map((link, index) => {
           const pathname = usePathname()
           return (
             <li key={index} onClick={() => setIsOpen(false)}>
               <Link
                  className={`${
                   pathname === link.href ? 'text-great-blue-400' : ''
                  } hover:text-great-blue-400 text-[1.1rem] p-2 my-4"`}
                 href={link.href}
               >
                  {link.title}
               </Link>
              </li>
            )
         })}
      </ul>
    </div>
  </div>
</nav>

    // <header className="h-20 bg-primary-100 dark:bg-primary-950">
    //   <nav className="container flex h-full items-center justify-between  px-4 text-primary-900  transition-all dark:text-primary-200 md:px-2">
    //     <Link href="/" className="text-2xl font-semibold">
    //       {branding.name}
    //     </Link>
    //     <ul
    //       className={`${
    //         isOpen ? 'top-[90px] h-1/2 w-1/2' : ''
    //       } absolute -top-full block  items-center md:relative md:top-[initial] md:flex md:space-x-5`}
    //     >
    
    //     </ul>{' '}
    //     <div className="flex space-x-4">
    //       <ThemeToggle className="mr-4 text-xl" />
    //       <button className="block text-2xl md:hidden" onClick={handleClick}>
    //         {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    //       </button>
    //     </div>
    //   </nav>
    // </header>
  )
}
