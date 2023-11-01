

import { useMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'
import { allPrivacies } from '../../utils/services'
import { Metadata } from 'next'
export const metadata:Metadata={
  title:allPrivacies[0].title,
  description:allPrivacies[0].description,
  other:{
    canonical:process.env.NEXT_PUBLIC_SITE_URL+"privacy"
  }

}
export default function PrivacyPolicy() {
  const MDXContent = useMDXComponent(allPrivacies[0].body.code)
  return (
    <div className="container px-4">
      <h2 className='text-great-blue-500'>Privacy Policy</h2>
      <i className='text-lg'>Last Updated: {new Date(allPrivacies[0].date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</i>
      <MDXContent />
    </div>
  )
}
