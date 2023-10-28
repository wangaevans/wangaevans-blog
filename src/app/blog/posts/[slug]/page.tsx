import { useMDXComponent } from 'next-contentlayer/hooks'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts } from 'contentlayer/generated'
import ButtonBack from '../../../../components/ui/ButtonBack'
import NotFound from '../../../not-found'
import { sluggify } from '../../../../utils/sluggify'
import { Metadata } from 'next'
import config from '../../../../config'

interface Props {
  params: {
    slug: string
  }
}

export const generateStaticParams = () => {
  return allPosts.map((post:any) => ({ slug: sluggify(post._raw.flattenedPath) }))
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const post = allPosts.find(
    (p:any) => sluggify(p._raw.flattenedPath) === `posts/${params.slug}`
  )

  return {
    title: post?.title,
    description: post?.description,
    icons: { icon: post?.banner },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      type: 'website',
      url: 'https://wangaevans.com',
      title: post?.title,
      description: post?.description,
      siteName: config.site.branding.name,
      images: [
        {
          url: 'https://wangaevans.com' + post?.banner
        }
      ]
    }
  }
}

const PostSlug = ({ params }: Props) => {
  const post = allPosts.find(
    (p:any) => sluggify(p._raw.flattenedPath) === `posts/${params.slug}`
  )
  let MDXContent

  if (!post) {
    return <NotFound />
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    MDXContent = useMDXComponent(post.body.code)
  }

  return (
    <div>
      <div className="container  px-5 md:px-0 ">
        <div className=" rounded w-full h-[22rem] bg-primary-200 px-4  md:px-0  ">
          <img
            loading="lazy"
            className="h-full max-w-full w-full rounded object-cover"
            src={`${post.banner}`}
          />
        </div>

        <h1 className="mt-6 text-center text-2xl font-bold uppercase">
          {post.title}
        </h1>
        <div className="mb-8 text-center">
          <time className="text-gray-600 dark:text-gray-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <MDXContent />
        <div className="mt-8 text-center">
          <ButtonBack>Back</ButtonBack>
        </div>
      </div>
    </div>
  )
}

export default PostSlug
