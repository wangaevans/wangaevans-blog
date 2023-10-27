import Link from 'next/link'

import ButtonLink from '../ui/ButtonLink'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Category } from 'contentlayer/generated'
import { sluggify } from '../../utils/sluggify';

interface Props {
  category: Category;

}

const CategoryItem = ({ category }: Props) => {
  return (
    <div  className=" p-2 my-3">
        <hr className='border-1 dark:border-primary-900'/>
      <h2 className="bg-gradient-to-r from-great-blue-800 via-primary-500 to-primary-500 bg-clip-text text-4xl font-bold text-transparent">
        <Link href={sluggify(category.url)}>{category.title}</Link>
      </h2>
      <p>{category.description}</p>
      {/* <ButtonLink href={category.url}>Open</ButtonLink> */}
    </div>
  )
}

export default CategoryItem
