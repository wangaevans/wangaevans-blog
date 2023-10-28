import Link from 'next/link'
import Hero from '../components/hero'
import { AiOutlineWhatsApp } from 'react-icons/ai'


const Home = () => {
  return (
    <div>
      <div className="container">
        <Hero />
      </div>
      <div className="my-5 rounded bg-primary-200 dark:bg-primary-900 p-3">
        <div className="container py-4">
          <h2 className="text-center text-4xl py-3 font-semibold text-great-blue-400">
            What are you working on
          </h2>
          <p className='text-center'>
            Let's have a conversation.
          </p>
          <Link  className="flex my-5 mx-auto rounded-lg text-xl bg-great-blue-500 hover:opacity-80 hover:-tranprimary-y-1 transition text-primary-200 w-fit px-5 py-3 items-center space-x-2" href={'https://wa.me/+254706344456'}>
            <AiOutlineWhatsApp size={24} />
            <span>Chat</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
