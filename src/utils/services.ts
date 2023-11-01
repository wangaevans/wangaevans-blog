// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allPosts, Post, allAuthors, allPrivacies, Privacy, allCategories, Category, Author } from 'contentlayer/generated'

const posts: Post[] = allPosts
    .filter(post => post.published) // Filter posts where published is true
    .sort((a, b) => b.date.localeCompare(a.date)); // Sort filtered posts by date


export { allAuthors, allCategories, allPrivacies, posts }
export type { Post, Author, Category, Privacy }