import { sluggify } from './../utils/sluggify';
import { MetadataRoute } from 'next'
import { posts, allCategories, allAuthors } from '../utils/services';

export default function sitemap(): MetadataRoute.Sitemap | any {
    const URL = process.env.NEXT_PUBLIC_SITE_URL;
    const blogposts = posts.map(({ _raw, date }) => ({
        url: `${URL}/${sluggify(_raw.flattenedPath)}`,
        lastModified: date,
        changeFrequency: 'daily',

    }));
    const blogcategories = allCategories.map(({ _raw, date }) => ({
        url: `${URL}/${sluggify(_raw.flattenedPath)}`,
        lastModified: date,
        changeFrequency: 'monthly',

    }));
    const blogauthors = allAuthors.map(({ _raw, date }) => ({
        url: `${URL}/${sluggify(_raw.flattenedPath)}`,
        lastModified: date,
        changeFrequency: 'daily',

    }));

    return [
        {
            url: URL,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${URL}/about'`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${URL}/categories'`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${URL}/contact'`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        ...blogauthors, ...blogcategories, ...blogposts
    ]
}
