import React  from 'react'
import CopyButton from "./copy-button"


export default function Pre({ children, code, ...props }) {
  const lang = props['data-language']
  return (
    <pre {...props} className='p-0 rounded-lg border border-primary-400 dark:border-primary-900'>
      <div className='code-header p-0   bg-gray-900'>
        <div className='px-4 py-2 text-primary-500 flex justify-between'>
          {lang}
          <CopyButton text={code} />
        </div>
      </div>
      <div className="py-4 px-4">
        {children}
      </div>
    </pre>
  )
}
