import { SITE_URL } from '@/config/routes';
import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api', '/auth', '/unauthorized'],
    },
  ],
  sitemap: `${SITE_URL}/sitemap.xml`,
});

export default robots;
