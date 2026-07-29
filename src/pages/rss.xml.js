import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../lib/site";

export async function GET(context) {
  const posts = (await getCollection("posts", ({ data }) => !data.draft))
    .sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const feedSite = new URL(`${base}/`, context.site);

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: feedSite,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: `${base}/posts/${post.id}/`,
      categories: post.data.tags
    })),
    customData: "<language>en-us</language>"
  });
}
