'use client'
import React, { useEffect, useState } from 'react'

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0)
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100
    setWidth(percent)
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollHeight)
    return () => window.removeEventListener('scroll', scrollHeight)
  }, [])

  return (
    <div
      className="reading-progress-bar"
      style={{ width: width+"%"}}
      
    ></div>
  )
}
