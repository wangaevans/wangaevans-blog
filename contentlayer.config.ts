import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { visit } from 'unist-util-visit'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    category: {
      type: 'string',
      description: 'The description of the post category',
      required: true
    },
    author: {
      type: 'string',
      description: 'The author of the post',
      required: true
    },
    published: {
      type: 'boolean',
      description: 'Check if the post is published or not',
      required: true
    },
    caption: {
      type: 'string',
      description: 'The banner caption and attribution',
      required: false
    },
    banner: {
      type: 'string',
      description: 'The banner image of the post',
      required: true
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    }
  }
}))
export const Category = defineDocumentType(() => ({
  name: 'Category',
  filePathPattern: `categories/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the category',
      required: true
    },
    description: {
      type: 'string',
      description: 'The description of the category',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the category',
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (category) => `/${category._raw.flattenedPath}`
    }
  }
}))
export const Author = defineDocumentType(() => ({
  name: 'Author',
  filePathPattern: `authors/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the author',
      required: true
    },
    bio: {
      type: 'string',
      description: 'The description of the author',
      required: true
    },
    avatar: {
      type: 'string',
      description: 'The avatar of the author',
      required: true
    },
    socialLinks: {
      type: 'list',
      of: {
        type: 'string'
      },
      description: 'The social links of the author',
      required: false
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (author) => `/blog/${author._raw.flattenedPath}`
    }
  }
}))
export const Privacy = defineDocumentType(() => ({
  name: 'Privacy',
  filePathPattern: `privacy/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      description: 'The description of the Privacy Policy',
      required: false
    },
    date: {
      type: 'date',
      description: 'The date of the privacy policy',
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (privacy) => `/${privacy._raw.flattenedPath}`
    }
  }
}))

// const rehypeoptions =

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Category, Author,Privacy],
  mdx: {
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node:any) => {
          if (node?.type === 'element' && node.tagName === 'pre') {
            const [codeEl] = node.children
            if (codeEl.tagName !== 'code') return
            node.raw = codeEl.children?.[0].value
          }
        })
      },
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          // Use one of Shiki's packaged themes
          theme: {
            dark: 'one-dark-pro',
          },
          // Set to true to keep the background color
          keepBackground: true,
          onVisitLine(node:any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node:any) {
            node.properties.className.push('highlighted')
          },
          onVisitHighlightedWord(node:any, id:any) {
            node.properties.className = ['word']
          }
        }
      ],
      () => (tree) => {
        visit(tree, (node:any) => {
          if (node?.type === 'element' && node.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties)) {
              return
            }
            for (const child of node.children) {
              if (child.tagName == 'pre') {
                child.properties['raw'] = node.raw
              }
            }
          }
        })
      }
    ]
  }
})
