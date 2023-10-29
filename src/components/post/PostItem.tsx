"use client"
import Link from 'next/link'

import TimeAgo from 'react-timeago'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Post } from 'contentlayer/generated'
import { sluggify } from '../../utils/sluggify'

interface Props {
  post: Post
}

const PostItem = ({ post }: Props) => {
  return (
    <div className="flex flex-col py-2">
      {/* <div className='flex-[.2] h-[56px]  overflow-hidden  rounded-full mr-3'>
        <img className='w-full h-full object-contain bg-white ' src={post.banner}/>
      </div> */}

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
        <span className="ml-1">
        {/* <time>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time> */}
          <TimeAgo className='ml-2' date={post.date} />
        </span>
      </p>
    </div>
  )
}

export default PostItem
