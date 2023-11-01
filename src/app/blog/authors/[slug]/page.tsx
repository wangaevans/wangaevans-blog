import { useMDXComponent } from 'next-contentlayer/hooks'

// eslint-disable-next-contentlayer/generated/generatedcontentlayer/generatedne @typescript-eslint/ban-ts-comment
// @ts-ignore
import Image from 'next/image'
import Link from 'next/link'
import { sluggify } from '../../../../utils/sluggify'
import { getPagination } from '../../../../utils/pagination'
import NotFound from '../../../not-found'
import ButtonBack from '../../../../components/ui/ButtonBack'
import { allAuthors, posts } from '../../../../utils/services'

interface Props {
  params: {
    slug: string
  }
}

export const generateStaticParams = () => {
  return allAuthors.map((author:any) => ({
    slug: sluggify(author._raw.flattenedPath)
  }))
}

export const generateMetadata = ({ params }: Props) => {
  const author = allAuthors.find(
    (p:any) => sluggify(p._raw.flattenedPath) === `authors/${params.slug}`
  )

  return {
    title: author?.name,
    description: author?.bio,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL+params.slug
    }
  }
}

const authorSlug = ({ params }: Props) => {
  const { currentPosts } = getPagination<any>(posts)
  const author = allAuthors.find(
    (p:any) => sluggify(p._raw.flattenedPath) === `authors/${params.slug}`
  )
  let MDXContent
  if (!author) {
    return <NotFound />
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    MDXContent = useMDXComponent(author.body.code)
  }

  const filteredPosts = currentPosts.filter(
    (post:any) => sluggify(post.author) === sluggify(author.name)
  )
  // function getIcon(Icon: any) {
  //   return <div>{Icon && <Icon />}</div>
  // }
  return (
    <div>
      <div className="container px-5 md:px-2 mt-10 grid">
        <div className="block  md:gap-4">
          <div className="grid place-items-center mb-5">
            <Image
              width={200}
              height={200}
              className="rounded-full"
              alt={author.name}
              src={author.avatar}
            />
          </div>

          <div className="grid">
            <MDXContent />
          </div>
        </div>
      
        <h1 className="mt-7 text-2xl font-bold md:text-3xl">
          {filteredPosts.length} Posts published by me
        </h1>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Link
              key={index}
              href={sluggify(post.url)}
              className="w-fit py-4 text-xl text-primary-500 hover:text-great-blue-700"
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
  )
}

export default authorSlug
