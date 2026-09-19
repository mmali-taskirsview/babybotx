import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://babybotx.com/en', lastModified: new Date() },
    { url: 'https://babybotx.com/de', lastModified: new Date() },
  ];
}
