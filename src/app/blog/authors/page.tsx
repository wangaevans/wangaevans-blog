import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allAuthors,Author } from 'contentlayer/generated'
import AuthorsList from '../../../components/authors/authors-list'

const authors: Author[] = allAuthors

export default function Authors() {
  return (
    <div className='select-none container px-6 '>
      <h1 className='my-4 font-bold text-3xl'>{authors.length} authors</h1>
      <AuthorsList  authors={authors}/>
    </div>
  )
}
