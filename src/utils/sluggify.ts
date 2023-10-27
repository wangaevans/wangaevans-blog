
export const sluggify = (slug: string) => {
    return slug.toLowerCase().split(' ').join('-')
}
