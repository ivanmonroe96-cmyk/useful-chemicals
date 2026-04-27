export const prerender = false;

import type { APIRoute } from 'astro';
import {
  getDocumentAlternateLinkHeader,
  getDocumentDownload,
  getPreferredDocumentLanguage,
} from '../../../lib/documentDownloads';

export const GET: APIRoute = async ({ params, request }) => {
  const id = params.id || '';
  const url = new URL(request.url);
  const explicitLanguage = url.searchParams.get('lang');
  const requestedLanguage = explicitLanguage || getPreferredDocumentLanguage(request.headers.get('accept-language'));
  const download = getDocumentDownload(id, requestedLanguage);

  if (!download) {
    return new Response('Document not found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Robots-Tag': 'noindex',
      },
    });
  }

  const alternateLinks = getDocumentAlternateLinkHeader(id);
  const headers = new Headers({
    Location: download.directHref,
    Vary: 'Accept-Language',
    'Content-Language': download.language,
    'X-Document-Language': download.language,
    'X-Document-Language-Fallback': download.isFallback ? 'true' : 'false',
    'X-Robots-Tag': 'noindex',
    'Cache-Control': 'public, max-age=300, s-maxage=3600',
  });

  if (alternateLinks) headers.set('Link', alternateLinks);

  return new Response(null, {
    status: 302,
    headers,
  });
};