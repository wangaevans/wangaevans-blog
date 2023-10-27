import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allCategories,Category } from 'contentlayer/generated'
import CategoryList from '../../../components/categories/category-list'

const categories: Category[] = allCategories.sort((a, b) => b.date.localeCompare(a.date))

export default function Categories() {
  return (
    <div className='select-none container px-6 md:px-0'>
      <h1 className='my-4 font-bold text-3xl'>{categories.length} Categories</h1>
      <CategoryList  categories={categories}/>
    </div>
  )
}
