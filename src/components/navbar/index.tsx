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
    <nav className="sticky left-0 top-0 z-20 w-full h-20  bg-primary-100  dark:bg-primary-950">
      <div className="mx-auto h-full flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center">
          {/* image */}
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            {branding.name}
          </span>
        </a>
        <div className="flex md:order-2">
          <ThemeToggle className="mr-4 text-xl" />
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary-500 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:text-primary-400 dark:hover:bg-primary-700 dark:focus:ring-primary-600 md:hidden"
          >
         {isOpen?<AiOutlineClose size={22}/>:<AiOutlineMenu size={22}/>}
          </button>
        </div>
        <div
          className={`${isOpen? "block":"hidden"}  w-full items-center justify-between md:order-1 md:flex md:w-auto`}
        >
          <ul className="mt-4 flex items-center  flex-col rounded-lg border border-primary-100 bg-primary-100 p-4 font-medium dark:border-primary-800 md:mt-0 md:flex-row md:space-x-8  md:border-0 md:p-0 dark:bg-primary-950">
            {links.map((link, index) => {
              const pathname = usePathname()
              return (
                  <Link
                  key={index} onClick={() => setIsOpen(false)}
                    className={`${
                      pathname === link.href ? 'text-great-blue-400 border dark:border-great-blue-400' : ''
                    } block justify-center px-2 text-[1.1rem] h-14 md:h-[initial] focus:outline-none  rounded hover:text-great-blue-400`}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
