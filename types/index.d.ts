declare module "contentlayer/generated"
export interface Site {
    site: {
        branding: {
            name: string
            description: string
            icon: string
            image: string
        }
        twitter: string
        copyright: string
        links: {
            title: string
            href: string
        }[]
    }
}