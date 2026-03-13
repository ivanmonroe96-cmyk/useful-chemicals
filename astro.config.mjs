// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://useful-chemicals.com',
  output: 'static',
  trailingSlash: 'always',
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'bn', 'zh', 'cs', 'nl', 'fr', 'de', 'id', 'it', 'ko', 'fa', 'pl', 'pt', 'ro', 'ru', 'es', 'tr', 'vi'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
