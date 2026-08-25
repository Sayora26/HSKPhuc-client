import { PATHS, SITE_URL } from '@/config/routes';
import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  const paths = [
    PATHS.HOME,
    PATHS.INTRODUCTION,
    PATHS.COURSES.MASS_COURSE,
    PATHS.COURSES.VIP_COURSE,
    PATHS.REVIEWS,
    PATHS.REGISTRATION,
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
};

export default sitemap;
