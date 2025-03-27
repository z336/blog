import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";

export async function GET(context) {
  const postImportResult = import.meta.glob("./writing/*.md", { eager: true });
  const posts = Object.values(postImportResult);

  return rss({
    title: "Jon Coleman",
    description: "Writing",
    site: context.site,
    items: await Promise.all(
      posts.map(async (post) => ({
        link: post.url,
        content: sanitizeHtml(await post.compiledContent()),
        ...post.frontmatter,
      })),
    ),
  });
}
