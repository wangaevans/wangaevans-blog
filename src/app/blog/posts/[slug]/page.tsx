import { useMDXComponent } from 'next-contentlayer/hooks'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts, Post } from 'contentlayer/generated'
import ButtonBack from '../../../../components/ui/ButtonBack'
import NotFound from '../../../not-found'
import { sluggify } from '../../../../utils/sluggify'
import config from '../../../../config'
import readingTime from 'reading-time'
import Link from 'next/link'
import Image from 'next/image'
interface Props {
  params: {
    slug: string
  }
}

export const generateStaticParams = () => {
  return allPosts.map((post: any) => ({
    slug: sluggify(post._raw.flattenedPath)
  }))
}

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find(
    (p: any) => sluggify(p._raw.flattenedPath) === `posts/${params.slug}`
  )

  return {
    title: post?.title,
    description: post?.description,
    icons: { icon: post?.banner },
    openGraph: {
      type: 'website',
      url: '/',
      title: post?.title,
      description: post?.description,
      siteName: config.site.branding.name,
      images: [
        {
          url: '/' + post?.banner
        }
      ]
    },
    robots: {
      index: true,
      follow: false
    },
    keywords: [`blog,wanga,evans,${post?.title}`],
    authors: [{ name: post?.author, url: '/' }],
    category: 'tech blog',
    alternates: {
      canonical: `/${params.slug}`
    },
    other: {
      'article:published_time': post?.date
    }
  }
}
const PostSlug = ({ params }: Props) => {
  const post = allPosts.find(
    (p) => sluggify(p._raw.flattenedPath) === `posts/${params.slug}`
  )
  const relatedPosts = post
    ? allPosts.filter(
        (p) => sluggify(p.category) === sluggify(post.category) && p !== post
      )
    : []

  let MDXContent

  if (!post) {
    return <NotFound />
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    MDXContent = useMDXComponent(post.body.code)
  }

  return (
    <div>
      <div className="container  px-5 ">
        <div className=" h-[22rem] w-full rounded bg-primary-200 px-4    ">
          <img
            loading="lazy"
            className="h-full w-full max-w-full rounded object-cover"
            src={`${post.banner}`}
          />
        </div>

        <h1 className="mt-6 text-center text-2xl font-bold uppercase">
          {post.title}
        </h1>
        <div className="mb-8 text-center">
          <time className="mr-3 text-gray-600 dark:text-gray-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {readingTime(post.body.code).text}
        </div>
        <MDXContent />
        <div className="grid">
          {relatedPosts.length > 0 ? (
            <h2 className="text-great-blue-400">You might also read:</h2>
          ) : null}
          {relatedPosts.length > 0
            ? relatedPosts.map((post, index) => (
                <div className="flex items-center">
                  <Image
                    width={30}
                    className="mr-3 rounded-lg bg-slate-200 p-1"
                    height={30}
                    alt=""
                    src={post.banner}
                  />
                  <Link
                    key={index}
                    href={sluggify(post.url)}
                    className="w-fit py-2 text-lg text-primary-500 hover:text-great-blue-700 md:text-xl"
                  >
                    {post.title}
                  </Link>
                </div>
              ))
            : null}
        </div>
        <div className="mt-8 text-center">
          <ButtonBack>Back</ButtonBack>
        </div>
      </div>
    </div>
  )
}

export default PostSlug
