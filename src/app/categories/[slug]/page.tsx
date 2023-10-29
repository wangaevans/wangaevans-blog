import ButtonBack from '../../../components/ui/ButtonBack'
import NotFound from '../../not-found'

// eslint-disable-next-contentlayer/generated/generatedcontentlayer/generatedne @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allCategories, allPosts, Post } from 'contentlayer/generated'
import { getPagination } from '../../../utils/pagination'
import Link from 'next/link'
import { sluggify } from '../../../utils/sluggify'

interface Props {
  params: {
    slug: string
  }
}

export const generateStaticParams = () => {
  return allCategories.map((category:any) => ({
    slug: sluggify(category._raw.flattenedPath)
  }))
}

export const generateMetadata = ({ params }: Props) => {
  const category = allCategories.find(
    (p:any) => sluggify(p._raw.flattenedPath) === `categories/${params.slug}`
  )

  return {
    title: category?.title,
    description: category?.description,
    alternates: {
      canonical: `https://wangaevans.com/${params.slug}`
    }
  }
}

const categorySlug = ({ params }: Props) => {
  const { currentPosts } = getPagination<any>(allPosts);
  const category = allCategories.find(
    (p:any) => sluggify(p._raw.flattenedPath) === `categories/${params.slug}`
  );

  if (!category) {
    return <NotFound />;
  }

  const filteredPosts = currentPosts.filter((post) =>
    sluggify(post.category)=== sluggify(category.title)
  );

  return (
    <>
        <div className='container  px-5 md:px-0  grid'>
          <h1 className='text-2xl md:text-3xl font-bold mt-10'>{filteredPosts.length} Posts in {category.title}</h1>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post,index) => (
              <Link key={index} href={sluggify(post.url)} className='py-4 text-xl text-primary-500 w-fit hover:text-great-blue-700'>
               {index+1}. {post.title}
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
  );
};

export default categorySlug;
