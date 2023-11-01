import { useMDXComponent } from 'next-contentlayer/hooks'

import Image from 'next/image'
import Link from 'next/link'
import { sluggify } from '../../utils/sluggify'
import ButtonBack from '../../components/ui/ButtonBack'
import { getPagination } from '../../utils/pagination'
import NotFound from '../not-found'
import { Post, allAuthors, posts } from '../../utils/services'

export const generateMetadata = () => {
  const author = allAuthors.find(
    (p) => sluggify(p._raw.flattenedPath) === `authors/wanga-evans`
  )

  return {
    title: author?.name,
    description: author?.bio,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL+'about'
    }
  }
}

const authorSlug = () => {
  const { currentPosts } = getPagination<Post>(posts)
  const author = allAuthors.find(
    (a) => sluggify(a._raw.flattenedPath) === `authors/wanga-evans`
  )
  let MDXContent
  if (!author) {
    return <NotFound />
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    MDXContent = useMDXComponent(author.body.code)
  }

  const filteredPosts = currentPosts.filter(
    (post) => sluggify(post.author) === sluggify(author.name)
  )

  return (
    <div>
      <div className="container mt-10 grid select-none px-5 md:px-2">
        <div className="block md:gap-4">
          <div className="mb-5 grid place-items-center">
            <Image
              width={200}
              height={200}
              className="rounded-full"
              alt={author.name}
              src={author.avatar}
            />
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid ">
              <MDXContent />
            </div>

            <h1 className="mt-7 text-2xl font-bold md:text-3xl">
              {filteredPosts.length} Post{filteredPosts.length == 1 ? '' : 's'}{' '}
              published by me
            </h1>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <Link
                  key={index}
                  href={sluggify(post.url)}
                  className="w-fit py-2 text-lg text-primary-500 hover:text-great-blue-700 md:text-xl"
                >
                  {index + 1}. {post.title}
                </Link>
              ))
            ) : (
              <p>No posts found for this author.</p>
            )}
          </div>
          <div className="mt-8 text-center">
            <ButtonBack>Back</ButtonBack>
          </div>
        </div>
      </div>
    </div>
  )
}

export default authorSlug
