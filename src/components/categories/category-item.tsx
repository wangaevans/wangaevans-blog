import Link from 'next/link'

import ButtonLink from '../ui/ButtonLink'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Category } from 'contentlayer/generated'
import { sluggify } from '../../utils/sluggify';

interface Props {
  category: any;

}

const CategoryItem = ({ category }: Props) => {
  return (
    <div  className=" p-2 my-3">
        <hr className='border-1 dark:border-primary-900'/>
      <h2 className="text-2xl md:text-3xl font-bold">
        <Link href={sluggify(category.url)}>{category.title}</Link>
      </h2>
      <p className='text-lg md:text-xl'>{category.description}</p>
      {/* <ButtonLink href={category.url}>Open</ButtonLink> */}
    </div>
  )
}

export default CategoryItem
