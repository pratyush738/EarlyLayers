import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const research = await getCollection('research', e => e.data.status === 'published');
  const notes = await getCollection('notes');

  const items = [
    ...research.map(entry => ({
      title: entry.data.title,
      link: `/research/${entry.id}/`,
      pubDate: entry.data.date,
      description: entry.data.summary,
    })),
    ...notes.map(entry => ({
      title: entry.data.title ?? 'Note',
      link: `/notes/${entry.id}/`,
      pubDate: entry.data.date,
      description: entry.body,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'EarlyLayers',
    description: 'An independent research desk covering onchain capital markets in Asia. Primary-source research for fund analysts and founders.',
    site: context.site,
    items,
  });
}
