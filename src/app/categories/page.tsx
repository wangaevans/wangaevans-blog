import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allCategories,Category } from 'contentlayer/generated'
import CategoryList from '../../components/categories/category-list'

const categories: Category[] = allCategories

export default function Categories() {
  return (
    <div className='select-none container px-3'>
      <h2 className='my-4 font-bold text-3xl'>{categories.length} Categories</h2>
      <CategoryList  categories={categories}/>
    </div>
  )
}
