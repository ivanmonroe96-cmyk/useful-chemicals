/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
	readonly PUBLIC_BING_SITE_VERIFICATION?: string;
	readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
	readonly PUBLIC_CLARITY_PROJECT_ID?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}