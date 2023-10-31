import { notFound } from 'next/navigation'

import PostList from '../../../components/post/PostList'
import PostPagination from '../../../components/post/PostPagination'

import { getPagination } from '../../../utils/pagination'
import { Post, posts } from '../../../utils/services'



interface Props {
  params: {
    number: string
  }
}

export const metadata = {
  title: 'List all posts',
  description: 'Describe posts - Generate by create next app'
}

export const generateStaticParams = () => {
  return Array.from({ length: posts.length }).map((_, index) => ({
    number: `${index + 1}`
  }))
}

const LayoutPages = ({ params }: Props) => {
  let arrayCurrentPosts
  let totalPagesNumber

  try {
    const { currentPosts, totalPages } = getPagination(posts, 2, params.number)
    arrayCurrentPosts = currentPosts
    totalPagesNumber = totalPages
  } catch (error) {
    notFound()
  }

  return (
    <div className='container'>
      <div className="mt-8 grid gap-6">
        <PostList posts={arrayCurrentPosts} />
        {totalPagesNumber > 1 && (
          <PostPagination
            totalPages={totalPagesNumber}
            currentPage={parseInt(params.number)}
          />
        )}
      </div>
    </div>
  )
}

export default LayoutPages
