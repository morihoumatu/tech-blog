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
		assets: '_assets',
		inlineStylesheets: 'never'
	},
	vite: {
		build: {
			modulePreload: {
				polyfill: false
			},
			cssCodeSplit: false,
			rollupOptions: {
				output: {
					assetFileNames: '_assets/[name].[hash][extname]',
					chunkFileNames: '_assets/[name].[hash].js',
					entryFileNames: '_assets/[name].[hash].js'
				}
			}
		},
		server: {
			middlewareMode: true,
			hmr: {
				protocol: 'ws',
				host: 'localhost'
			}
		}
	}
});