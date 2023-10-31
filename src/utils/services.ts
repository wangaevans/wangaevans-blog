// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts, Post, allAuthors, allCategories, Category, Author } from 'contentlayer/generated'

export const posts: Post[] = allPosts
    .filter(post => post.published) // Filter posts where published is true
    .sort((a, b) => b.date.localeCompare(a.date)); // Sort filtered posts by date

export { allAuthors, allCategories}
export type{ Post, Author, Category }