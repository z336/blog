import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";

const postImports = import.meta.glob("./**/*.md", { eager: true });

export async function GET(context) {
  const posts = await Promise.all(
    Object.values(postImports).map(async (post) => {
      const html = await post.compiledContent();
      return {
        title: post.frontmatter.title,
        pubDate: new Date(post.frontmatter.pubDate),
        link: post.url,
        description: sanitizeHtml(html),
      };
    }),
  );

  posts.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: `Jon Coleman`,
    description: "Notes and links about technical writing and web development",
    site: context.site,
    items: posts,
    customData: `<language>en-us</language>`,
  });
}
