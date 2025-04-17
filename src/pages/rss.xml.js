import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  const items = await pagesGlobToRssItems(import.meta.glob("./**/*.md"));

  items.sort((a, b) => {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });

  return rss({
    title: `Jon's digital garden`,
    description: "Notes and links about technical writing and web development",
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}
