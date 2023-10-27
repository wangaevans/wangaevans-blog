import React from 'react'
import config from '../../config'
import PostList from '../post/PostList'
import { getPagination } from '../../utils/pagination'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date))
export default function Hero() {
  const { currentPosts} = getPagination(posts)
  return (
    <div>
      <div className="container ">
        <h1 className="bg-gradient-to-r from-great-blue-400 to-great-blue-600 bg-clip-text text-transparent pt-5 md:pt-14 text-4xl  md:text-6xl font-semibold">
          I'm {config.site.branding.name.split(' ').splice(1)}, A Network Engineer{' '}
          <br /> 
        </h1>
        <p className="md:text-xl my-2">
          I specialize in DevOps. I
          share my tech journey on X(formerly Twitter),commit code to Github.
        </p>
      </div>
      <div className="container">
        <div className="flex pt-14 items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
          <Link className='text-semibold md:text-xl text-great-blue-400' href={'/blog/posts'}>View All</Link>
        </div>
        <div className="grid gap-2 my-4">
          <PostList posts={currentPosts} />
        </div>
      </div>
    
    </div>
  )
}
