import { prerender } from "$app/server";
import { client } from "$lib/sanity/client";
import type { Post } from "$lib/sanity/sanity.types";
import type { PostPreviewType } from "$lib/types/PostPreview";

export const getBlogPostsPreview = prerender(async () => {
  const query = `
    *[_type == "post"]
    { _id, slug, title, categories[]->{title}, publishedAt, mainImage, author->{name, image}
    }
    | order(publishedAt desc)  
  `;
  const posts = await client.fetch(query);
  return posts as PostPreviewType[];
})