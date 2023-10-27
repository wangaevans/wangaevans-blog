import React from 'react'
import ThemeToggle from '../theme/theme-toggle'
import Link from 'next/link'

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
  return (
    <header className="h-20 dark:bg-primary-950 bg-primary-100">
      <nav className="container flex h-full justify-between items-center  text-primary-900 transition-all  dark:text-primary-200 px-4 md:px-2">
        <Link href="/" className="text-2xl font-semibold">
          {branding.name}
        </Link>
        <ul className="hidden md:flex items-center space-x-5">
          {links.map((link, index) => (
            <li key={index}>
              <Link className='text-[1.1rem]' href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ThemeToggle className='text-xl mr-4'  />
      </nav>
    </header>
  )
}
