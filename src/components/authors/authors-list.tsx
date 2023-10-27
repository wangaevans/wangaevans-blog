
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Author} from 'contentlayer/generated'
import AuthorItem from './author-item'

interface Props {
  authors: Author[]
}

const AuthorList = ({ authors}: Props) => {
  return (
    <>
      {authors.map((author) => (
        <AuthorItem  author={author} key={author._raw.flattenedPath} />
      ))}
    </>
  )
}

export default AuthorList
