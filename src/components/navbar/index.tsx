'use client'
import React, { useState } from 'react'
import ThemeToggle from '../theme/theme-toggle'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

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
    <header className="h-20 bg-primary-100 dark:bg-primary-950">
      <nav className="container flex h-full items-center justify-between  px-4 text-primary-900  transition-all dark:text-primary-200 md:px-2">
        <Link href="/" className="text-2xl font-semibold">
          {branding.name}
        </Link>
        <ul className={`${isOpen?"top-[90px] h-1/2 w-1/2":""} absolute -top-full md:top-[initial]  block items-center md:space-x-5 md:relative md:flex`}>
          {links.map((link, index) => (
            <li key={index}>
              <Link className="text-[1.1rem]" href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex space-x-4'>
        <ThemeToggle className="mr-4 text-xl" />
        <button className="block md:hidden text-2xl" onClick={handleClick}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        </div>
      </nav>
    </header>
  )
}
