import Link from 'next/link'
import Container from '../components/ui/Container'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "Not Found",
  description: "This page could not be found!",
  icons:{
    icon:"/favicon.ico"
  }
}
const NotFound = () => {
  return (
    <Container>
      <div className="flex min-h-[300px] flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <h1 className="text-7xl font-bold">Error 404</h1>
          <p>Page Not Found</p>
        </div>
        <Link
          type="button"
          href={"/"}
          className="rounded bg-gradient-to-r from-great-blue-500 to-great-blue-700 px-4 py-2 text-white hover:from-green-400 hover:to-great-blue-500"
        >
          Homepage
        </Link>
      </div>
    </Container>
  )
}

export default NotFound
