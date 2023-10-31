'use client'

import React from 'react'
import PostList from '../post/PostList'
import { getPagination } from '../../utils/pagination'
import Link from 'next/link'
import { useSearch } from 'react-use-search'
import { AiOutlineSearch } from 'react-icons/ai'
import { posts } from '../../utils/services'


const predicate: any = (post: any, query: any) =>
  post.title.toLowerCase().includes(query.toLowerCase()) |
  post.body.code.toLowerCase().includes(query.toLowerCase())

export default function Hero() {
  const { currentPosts } = getPagination(posts)
  const [filteredPosts, query, handleChange, setQuery] = useSearch(
    posts,
    predicate,
    { debounce: 200 }
  )

  const RenderedPosts = () => {
    if (filteredPosts.length>0 && query.length > 0) {
      return (
        <>
         <p className="mt-5">
        {filteredPosts.length } post{filteredPosts.length==1?"":"s"} found matching for{' '}
        <span className="text-great-blue-400">{query}</span>
      </p>
          <PostList posts={filteredPosts} />
        </>
      )
    } else if(!query) {
      return (
        <>
          <PostList posts={currentPosts} />
          <Link
            className="text-semibold mx-auto w-fit rounded-lg bg-great-blue-500 px-6 py-3 text-white hover:opacity-95 md:text-xl"
            href={'/blog/posts'}
          >
            View All Articles
          </Link>
        </>
      )
    }
  }
  const NoMatchResponse= () => {
    if (filteredPosts.length==0 && query.length > 0) {
      return (
        <p className="mt-5">
        No matching posts found for:
        <span className="text-great-blue-400">{query}</span>
      </p>
      )
    } 
  }
  return (
    <div>
      <div className="container ">
        <h1 className="bg-gradient-to-r from-great-blue-400 to-great-blue-600 bg-clip-text pt-5 text-4xl font-semibold text-transparent  md:pt-14 md:text-6xl">
          Hi, Welcome!, I'm Evans <br />
        </h1>

        <p className="my-2 md:text-xl">
          I love writing about tech and that's why i made this platform, I share my tech journey on X, commit code to Github.
        </p>
      </div>
      <div className="container">
        <div className="items-center justify-between pt-14 md:flex">
          <h2 className="text-3xl font-bold  md:text-4xl">Latest Articles</h2>
          <div className="search">
            <div className="inline-flex w-full md:w-[90%] mb-0 pb-0 justify-between  rounded-lg border border-primary-200 bg-slate-200  dark:border-primary-700 dark:bg-primary-900 ">
              <input
                className="flex-auto border-none bg-transparent indent-4 outline-none focus:outline-none"
                placeholder="Search for a post..."
                value={query}
                onChange={handleChange}
              />
              <button
                className="rounded bg-great-blue-400 px-5 py-3 text-white"
                onClick={() => setQuery(query)}
              >
          <span className='sr-only'>Search Post</span>    

                <AiOutlineSearch size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 grid gap-2">
          <NoMatchResponse/>
          <RenderedPosts />
        </div>
      </div>
    </div>
  )
}
