// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

/** @typedef {'always'|'hourly'|'daily'|'weekly'|'monthly'|'yearly'|'never'} Changefreq */

// Pages that should be excluded from sitemap or have lower priority
const NOINDEX_PATHS = ['/api/', '/disclaimer/', '/privacy-policy/', '/terms-of-service/', '/impressum/'];

// https://astro.build/config
export default defineConfig({
  site: 'https://useful-chemicals.com',
  output: 'static',
  trailingSlash: 'always',
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some(path => page.includes(path)),
      serialize(item) {
        /** @type {Changefreq} */
        let changefreq = 'monthly';
        let priority = 0.5;
        // Homepage
        if (item.url === 'https://useful-chemicals.com/') {
          priority = 1.0; changefreq = 'weekly';
        // Product pages
        } else if (item.url.includes('/products/')) {
          priority = 0.9; changefreq = 'weekly';
        // Blog
        } else if (item.url.includes('/blog')) {
          priority = 0.7; changefreq = 'daily';
        // Core marketing pages
        } else if (['/about/', '/contact/', '/faq/', '/applications/', '/wholesale/', '/ordering/', '/safety/', '/certificates/', '/shipping/'].some(p => item.url.includes(p))) {
          priority = 0.8; changefreq = 'monthly';
        }
        return /** @type {any} */ ({ ...item, priority, changefreq });
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'bn', 'zh', 'cs', 'nl', 'fr', 'de', 'id', 'it', 'ko', 'fa', 'pl', 'pt', 'ro', 'ru', 'es', 'tr', 'vi'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
