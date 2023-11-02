import { Post } from '../../utils/services'
import PostItem from './PostItem'



interface Props {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post,index) => (
        <div key={index}>
        <hr className='border-1 dark:border-primary-900'/>
        <PostItem post={post} key={post.title} />
        </div>
      ))}
    </>
  )
}

export default PostList
