import { Metadata } from 'next'
import PostList from '../../../components/post/PostList'
import PostPagination from '../../../components/post/PostPagination'

import { getPagination } from '../../../utils/pagination'
import { posts } from '../../../utils/services'


export const metadata:Metadata = {
  title: 'All posts',
  description: 'All published posts',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL+ "posts"
    
  }
}

const Posts = () => {
  const { currentPosts, totalPages } = getPagination(posts)

  return (
      <div className="container  px-5 mt-8 grid gap-6">
        <h1>All posts</h1>
        <PostList  posts={currentPosts} />
        {totalPages > 1 && <PostPagination totalPages={totalPages} />}
      </div>
  )
}

export default Posts
