import React  from 'react'
import CopyButton from "./copy-button"


export default function Pre(props) {
  const lang = props['data-language']
  return (
    <pre {...props} className='p-0 rounded-lg border border-primary-400 dark:border-primary-900'>
      <div className='bg-[#232731]'>
        <div className='md:px-4  flex justify-between'>
         <p className='text-base text-primary-400 '> {lang}</p>
          <CopyButton text={props.raw}/>
        </div>
      </div>
      <div className="py-4 px-2 md:px-4">
        {props.children}
      </div>
    </pre>
  )
}
