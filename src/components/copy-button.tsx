"use client"
import React, { useState } from 'react'
import { BsClipboard, BsClipboardCheck } from 'react-icons/bs'

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
    <button className='transition-all' disabled={isCopied} onClick={copy}>
        {isCopied?<BsClipboardCheck  aria-description="copied to clipboard" className='text-green-400' />:<BsClipboard className="text-primary-400" aria-description="copy to clipboard"/>}
    </button>
  )
}
