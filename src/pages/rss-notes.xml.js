import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import data from "./notes/_notes.json";
import { slugGenerator } from "../utils/slugGenerator.mjs";

export async function GET({ site }) {
  const items = data.map((note) => {
    // Generate the note URL based on the title
    const slug = slugGenerator(note.title);
    const noteURL = `/notes/${slug}`;

    return {
      title: note.title,
      link: noteURL,
      guid: noteURL,
      pubDate: new Date(note.pubDate),
      description: note.description,
      content:
        note.description + `<p><a href="${note.url}">${note.url}</a></p>`, // Append external URL in the description,
    };
  });

  // Return the generated RSS feed
  return rss({
    title: "Jon Coleman",
    description: "Notes",
    site,
    items,
  });
}
