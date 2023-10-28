
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Category} from 'contentlayer/generated'
import CategoryItem from './category-item'

interface Props {
  categories: any[]
}

const CategoryList = ({ categories}: Props) => {
  return (
    <>
      {categories.map((category) => (
        <CategoryItem  category={category} key={category._raw.flattenedPath} />
      ))}
    </>
  )
}

export default CategoryList
