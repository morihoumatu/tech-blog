import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	site: 'https://example.com',
	base: '/tech-blog',
	integrations: [
		mdx(), 
		sitemap({
			i18n: {
				defaultLocale: 'ja',
				locales: {
					ja: 'ja-JP'
				}
			}
		}), 
		tailwind()
	],
	markdown: {
		shikiConfig: {
			theme: 'dracula',
			wrap: true
		}
	},
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
		assets: 'assets',
		format: 'file',
		assetsPrefix: '_astro',
		serverEntry: 'entry.mjs',
	},
	vite: {
		build: {
			assetsInlineLimit: 4096,
			rollupOptions: {
				output: {
					entryFileNames: 'entry.[hash].js',
					chunkFileNames: 'chunks/chunk.[hash].js',
					assetFileNames: 'assets/asset.[hash][extname]'
				}
			}
		}
	}
});