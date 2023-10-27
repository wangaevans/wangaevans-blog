"use client"
import React from 'react'
import {RotatingLines} from "react-loader-spinner"

export default function Loading() {
  return (
    <div className='grid place-items-center min-h-screen'>
      <div>
        <RotatingLines/>
        <p>Loading...</p>
      </div>
    </div>
  )
}
