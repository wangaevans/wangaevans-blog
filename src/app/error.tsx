'use client'
import React, { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <>
      <div className="flex min-h-[300px] flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <h1 className="text-7xl font-bold">Something went wrong!</h1>
          {/* <p>Page Not Found</p> */}
        </div>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded bg-gradient-to-r from-great-blue-500 to-great-blue-700 px-4 py-2 text-white hover:from-green-400 hover:to-great-blue-500"
        >
          Try again
        </button>
      </div>
    </>
  )
}
