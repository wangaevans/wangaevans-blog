'use client'
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

      <h2 className="-mb-0  text-2xl font-bold">
        <Link href={sluggify(post.url)}>{post.title}</Link>
      </h2>
      <p className="text-base">
        Posted in{' '}
        <span className="text-great-blue-400 font-semibold">
          <Link href={`/categories/${sluggify(post.category)}`}>
            {post.category}
          </Link>
        </span>
        <span>
          {/* <time>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time> */}
          <TimeAgo className="ml-2" date={post.date} />
        </span>
      </p>
    </div>
  )
}

export default PostItem
