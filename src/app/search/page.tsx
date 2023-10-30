"use client"
  import React from 'react'
  import { useSearch } from 'react-use-search'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import { allPosts, Post } from 'contentlayer/generated'
  import { sluggify } from '../../utils/sluggify'
  import Link from 'next/link'
  import TimeAgo from "react-timeago"
  
  const posts: Post[] = allPosts
  
  const predicate = posts
    ? (post, query) =>
        post.body.code.includes(query) || post.title.includes(query)
    : null
  
  const SearchedPostsList = () => {
    const [filteredPosts, query, handleChange, setQuery] = useSearch(
      posts,
      predicate,
      { debounce: 200 }
    )
  
    const noResultsMessage = <p className='px-5 mt-5 '>No matching posts found for <span className='text-great-blue-500'>{query}</span></p>;
  
    return (
      <div className='container  px-5'>
        <div className="rounded-lg flex justify-between md:w-1/2 border border-primary-300 bg-primary-200 dark:border-primary-700 dark:bg-primary-900">
          <input
            className="flex-auto border-none bg-transparent indent-4 outline-none"
            placeholder="Search for a post..."
            value={query}
            onChange={handleChange}
          />
          <button
            className="rounded bg-great-blue-400 p-3 text-white"
            onClick={() => setQuery(query)}
          >
            Search Post
          </button>
        </div>
  
        {filteredPosts.length === 0 && query.length > 0 ? (
          noResultsMessage
        ) : (
          filteredPosts.map((post) => (
            <div className="flex flex-col py-2 w-full" key={post.id}>
              <h2 className="bg-gradient-to-r -mb-0 from-primary-600 via-primary-400 to-primary-900 bg-clip-text text-2xl font-bold text-transparent">
                <Link href={sluggify(post.url)}>{post.title}</Link>
              </h2>
              <p className='text-sm'>
                Posted in{' '}
                <span className="text-great-blue-400">
                  <Link
                    href={`/categories/${post.category
                      .toLowerCase()
                      .split(' ')
                      .join('-')}`}
                  >
                    {post.category}
                  </Link>
                </span>
                <span>
                  <TimeAgo className='ml-2' date={post.date} />
                </span>
              </p>
            </div>
          ))
        )}
      </div>
    )
  }
  
  export default SearchedPostsList;
  