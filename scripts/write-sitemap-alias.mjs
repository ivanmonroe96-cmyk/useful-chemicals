import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const clientDir = join(process.cwd(), 'dist', 'client');
const source = join(clientDir, 'sitemap-0.xml');
const target = join(clientDir, 'sitemap.xml');

if (!existsSync(source)) {
  throw new Error('Expected dist/client/sitemap-0.xml to exist after Astro sitemap generation.');
}

copyFileSync(source, target);
console.log('Created dist/client/sitemap.xml from sitemap-0.xml');