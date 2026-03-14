import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://premiumdeskworker.com',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  image: {
    domains: ['images.unsplash.com']
  }
});