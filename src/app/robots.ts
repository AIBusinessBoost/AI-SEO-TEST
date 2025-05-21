import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/admin/*'],
    },
    sitemap: 'https://projectai-seo-testgit-300570-j4y.vercel.app/sitemap.xml',
  }
}
