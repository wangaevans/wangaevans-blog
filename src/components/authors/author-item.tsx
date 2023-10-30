import Link from 'next/link'

import ButtonLink from '../ui/ButtonLink'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Author } from 'contentlayer/generated'
import { sluggify } from '../../utils/sluggify';

interface Props {
  author: Author;

}

const authorItem = ({ author }: Props) => {
  return (
    <div  className=" p-2 my-3">
        <hr className='border-1 dark:border-primary-900'/>
      <h2 className="bg-gradient-to-r  from-primary-200 to-primary-500 bg-clip-text text-2xl md:text-3xl font-bold text-transparent">
        <Link href={sluggify(author.url)}>{author.name}</Link>
      </h2>
      <p>{author.bio}</p>
      {/* <ButtonLink href={author.url}>Open</ButtonLink> */}
    </div>
  )
}

export default authorItem
