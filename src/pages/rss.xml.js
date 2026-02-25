// src/pages/rss.xml.js
import rss from '@astrojs/rss';

export function GET(context) {
  return rss({
    title: 'HUNT ARTS – Savage edits & AI',
    description: 'Savage edits. Savage collabs. Savage AI. From Uganda with zero fucks.',
    site: context.site,  // This now works because site is in config
    items: [],  // Add real items later (e.g., from blog posts)
  });
}
