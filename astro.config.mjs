// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://snailsploit.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({
    serialize: (item) => {
      // Set priority based on page type
      const url = item.url;
      let priority = 0.7; // default for articles

      if (url === 'https://snailsploit.com/') {
        priority = 1.0;
      } else if (url.match(/^https:\/\/snailsploit\.com\/(ai-security|frameworks|security-research|tools|writing|about|adversarial-minds)\/$/)) {
        priority = 0.9; // hub pages
      } else if (url.includes('/frameworks/aatmf') || url.includes('/frameworks/prompt')) {
        priority = 0.8; // framework detail pages
      } else if (url.includes('/security-research/cves/cve-')) {
        priority = 0.6; // CVE pages
      }

      return {
        ...item,
        priority,
        changefreq: priority >= 0.9 ? 'weekly' : 'monthly',
        lastmod: new Date().toISOString().split('T')[0],
      };
    },
  }), react()]
});