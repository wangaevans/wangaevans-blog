import Link from 'next/link'
import Hero from '../components/hero'
import ButtonLink from '../components/ui/ButtonLink'
import { AiOutlineMessage } from 'react-icons/ai'

export const metadata = {
  title: 'Home page',
}

const Home = () => {
  return (
    <div>
      <div className="container">
        <Hero />
      </div>
      <div className="my-5 rounded bg-primary-200 dark:bg-primary-900 p-3">
        <div className="container py-10">
          <h2 className="text-center text-4xl py-3 font-semibold text-great-blue-500">
            What are you working on
          </h2>
          <p>
            Let's have a conversation. Id love to take part and interact with
            guys with the same interest. Reach out to me please
          </p>
          <Link className="flex my-5 mx-auto rounded-lg text-xl bg-great-blue-500 hover:opacity-80 hover:-tranprimary-y-1 transition text-primary-200 w-fit px-5 py-3 items-center space-x-2" href={''}>
            <AiOutlineMessage size={24} />
            <span>Chat</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
