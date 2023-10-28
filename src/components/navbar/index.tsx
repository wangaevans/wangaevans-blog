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
    <>
      <nav className="sticky left-0 top-0 z-20 w-full   bg-primary-100  dark:bg-primary-950">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-8">
          <a href="https://flowbite.com/" className="flex items-center">
            {/* image */}
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-primary-200">
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
              {isOpen ? (
                <AiOutlineClose size={22} />
              ) : (
                <AiOutlineMenu size={22} />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-primary-200 bg-primary-100 p-4 font-medium dark:border-primary-700 dark:bg-primary-950 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 ">
              {links.map((link, index) => {
                const pathname = usePathname()
                return (
                  <li key={index} onClick={()=>setIsOpen(false)}>
                    <Link
                      href={link.href}
                      className={`${
                        pathname === link.href ? 'text-great-blue-400' : ''
                      } block rounded py-2 pl-3 pr-4 text-lg hover:text-great-blue-400 md:bg-transparent md:p-0  `}
                      aria-current="page"
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
    </>
  )
}
