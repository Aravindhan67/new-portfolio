import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://aravindhan-red.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Don't let search engines index the admin dashboard
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
