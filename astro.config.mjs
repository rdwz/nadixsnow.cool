import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [compress(), compressor(), robotsTxt(), sitemap()],
	site: 'https://nadixsnow.cool'
})
