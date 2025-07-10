// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { remarkRelativeImages } from './src/plugins/remark-relative-images.js';

// https://astro.build/config 
export default defineConfig({
  integrations: [mdx()],
  site: 'https://bgheneti.github.io',
  base: '/',
  output: 'static',
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkRelativeImages],
  },
  build: {
    assets: 'static'
  }
});
