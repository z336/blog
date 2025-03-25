import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Jon Coleman",
    description: "Jon's digital garden.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./writing/*.md")),
    customData: `<language>en-us</language>`,
  });
}
