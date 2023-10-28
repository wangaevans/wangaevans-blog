import Link from 'next/link'

const NotFound = () => {
  return (
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
  )
}

export default NotFound
