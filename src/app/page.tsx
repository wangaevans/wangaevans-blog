import Link from 'next/link'
import Hero from '../components/hero'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Metadata } from 'next'

export const metadata:Metadata={
  other:{
    canonical:"/"
  }
}
const Home = () => {
  return (
    <div>
      <div className="container">
        <Hero />
      </div>
      <div className="mb-5 mt-10 rounded bg-primary-200 dark:bg-primary-900 p-3">
        <div className="container py-2 md:py-4">
          <h2 className="text-center text-[2.1rem] py-3 font-semibold text-great-blue-400">
            What are you working on
          </h2>
          <p className='text-center'>
            Let's have a conversation.
          </p>
          <Link  className="flex my-5 mx-auto rounded-lg text-xl bg-great-blue-500 hover:opacity-80 hover:-tranprimary-y-1 transition text-primary-100 w-fit px-5 py-3 items-center space-x-2" href={'https://wa.me/+254706344456'}>
            <AiOutlineWhatsApp size={24} />
            <span>Chat</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
