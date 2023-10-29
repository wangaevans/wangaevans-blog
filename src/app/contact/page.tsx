import React from 'react'
import { ContactForm } from '../../components/contact-form'

export async function generateMetadata() {
  return {
    title: "Contact Us",
    description: "Lets us know what you have in mind",
    icons: {
      icon: '/favicon.ico'
    },
    alternates: {
      canonical: `https://wangaevans.com/contact`
    }
  }
}
export default function Contact() {
  return (
    <div className='container'>
         <h2 className="text-center text-4xl font-extrabold tracking-tight text-great-blue-500">
          Contact Me
        </h2>
        {/* <p className="text-center font-light text-primary-500 dark:text-primary-400 sm:text-xl">
          Got a technical issue?  Let me know.
        </p> */}
      <ContactForm/>
    </div>
  )
}
