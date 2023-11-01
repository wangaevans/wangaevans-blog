"use client"
import React, { useState } from 'react'

export default function CopyButton({text}:any) {
    const[isCopied,setIsCopied]=useState(false)
    const copy=async()=>{
        await navigator.clipboard.writeText(text)
        setIsCopied(true)
        setTimeout(()=>{
            setIsCopied(false)
        },1000)
    }
  return (
    <button disabled={isCopied} onClick={copy}>
        {isCopied?"Copied":"Copy"}
    </button>
  )
}
