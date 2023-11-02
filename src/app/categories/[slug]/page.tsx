import ButtonBack from '../../../components/ui/ButtonBack'
import NotFound from '../../not-found'

// eslint-disable-next-contentlayer/generated/generatedcontentlayer/generatedne @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getPagination } from '../../../utils/pagination'
import Link from 'next/link'
import { Category, allCategories, posts } from '../../../utils/services'

interface Props {
  params: {
    slug: string
  }
}


export const generateMetadata = ({
  params
}: {
  params: { slug: string }
}) => {
  const category = allCategories.find((p) => p.slug=== params.slug)

  return {
    title: category?.title,
    description: category?.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.slug}`
    }
  }
}

const categorySlug = ({ params }: { params: { slug: string } }) => {
  const { currentPosts } = getPagination<any>(posts)
  
  // const slug = decodeURI(params.slug.join('/'))
  const category = allCategories.find((p) => p.slug== params.slug)

  // const category = allCategories.find((p) => p.title === '')

  if (!category) {
    return <NotFound />
  }

  const filteredPosts = currentPosts.filter(
    (post) => post.category === category.slug
  )

  return (
    <>
      <div className="container  grid   px-5">
        <h1 className="mt-10 text-2xl font-bold md:text-3xl">
          {filteredPosts.length} Post{filteredPosts.length == 1 ? '' : 's'} in{' '}
          {category.title}
        </h1>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Link
              key={index}
              href={post.url}
              className="w-fit py-4 text-xl text-primary-500 hover:text-primary-200"
            >
              {index + 1}. {post.title}
            </Link>
          ))
        ) : (
          <p>No posts found in this category.</p>
        )}
      </div>
      <div className="mt-8 text-center">
        <ButtonBack>Back</ButtonBack>
      </div>
    </>
  )
}

export default categorySlug
