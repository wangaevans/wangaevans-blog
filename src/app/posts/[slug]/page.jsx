import { useMDXComponent } from 'next-contentlayer/hooks'
import Toc from '../../../components/toc'
import NotFound from '../../not-found'
import { sluggify } from '../../../utils/sluggify'
import config from '../../../config'
import readingTime from 'reading-time'
import Link from 'next/link'
import Pre from '../../../components/Pre'
import { posts } from '../../../utils/services'
import ReadingProgressBar from '../../../components/reading-progress-bar'
// interface Props {
//   params: {
//     slug: string
//   }
// }
const mdxComponents = {
  Toc,
  pre: Pre
}

export const generateStaticParams = () => {
  return posts.map((post) => ({
    slug: sluggify(post._raw.flattenedPath)
  }))
}

export const generateMetadata = ({ params }) => {
  const post = posts.find(
    (p) => sluggify(p._raw.flattenedPath) === `posts/${params.slug}`
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
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.slug}`
    },
    other: {
      'article:published_time': post?.date
    }
  }
}
const PostSlug = ({ params }) => {
  const post = posts.find(
    (p) => sluggify(p._raw.flattenedPath) === `posts/${params.slug}`
  )
  const relatedPosts = post
    ? posts.filter(
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
      <ReadingProgressBar />
      <div className="container  px-5 ">
        <div className=" w-[800px] h-[400px] mx-auto rounded bg-primary-200 ">
          <img
            className="h-full w-full shadow-lg rounded-t-lg lg:rounded-lg object-cover"
            src={`${post.banner}`}
          />
          {post.caption ? <center className='py-4 text-sm'>Image Source:{post.caption}</center> : null}
        </div>


        <h1 className="mt-12 text-center text-2xl font-bold uppercase">
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
        <div className="js-toc-content">
          <MDXContent components={mdxComponents} />
        </div>
        <div className="grid">
          {relatedPosts.length > 0 ? (
            <h2 className="text-great-blue-400">You might also read:</h2>
          ) : null}
          {relatedPosts.length > 0
            ? relatedPosts.map((post, index) => (
              <Link key={index} className="grid" href={sluggify(post.url)}>
                <div className="h-[15em]">
                  <img
                    loading="lazy"
                    className="mr-3 h-full w-full rounded-lg bg-slate-200 object-contain p-1"
                    alt="Image"
                    src={post.banner}
                  />
                </div>
                <h2 className=" w-fit pt-2 text-xl md:2xl text-primary-400 hover:text-great-blue-500">
                  {post.title}
                </h2>
                <div className="-mt-2 flex items-center space-x-3">
                  <time className="mr-3">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                  {readingTime(post.body.code).text}
                </div>
              </Link>
            ))
            : null}
        </div>
        {/* <div className="mt-8 text-center">
          <ButtonBack>Back</ButtonBack>
        </div> */}
      </div>
    </div>
  )
}

export default PostSlug
