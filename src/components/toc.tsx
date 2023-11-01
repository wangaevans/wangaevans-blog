"use client"

import { useEffect } from "react"
import tocbot from "tocbot"
import { TfiMenuAlt } from "react-icons/tfi"

export default function Toc(){
    useEffect(()=>{
        tocbot.init({
            tocSelector:".js-toc",
            contentSelector:".js-toc-content",
            headingSelector:"h2,h3",
            activeLinkClass:"text-great-blue-400",
            orderedList:true,
            headingsOffset:100,
            scrollSmoothOffset:-100,
            listClass:"line-numbers"
           
           
        })
        return()=>tocbot.destroy();
    },[])
    return(
        <div className="border my-4 p-5  rounded-lg border-slate-300 dark:border-primary-800">
            <span className="flex items-center text-great-blue-500 text-2xl font-semibold  dark:text-great-blue-400"><TfiMenuAlt className="mr-2"/> Table of Contents</span>
            <div className="js-toc my-2 text-lg"></div>
        </div>
    )
}