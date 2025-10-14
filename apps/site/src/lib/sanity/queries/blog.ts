import { client } from "../client"
import type { Post } from "../sanity.types";

export const getAllBlogPosts = async (): Promise<Post[]> => {
  
  const posts = await client.fetch('*[_type == "post"] | order(publishedAt desc)');
  return posts as Post[];
}

export const getAllBlogPostsPreview = async () => {
  const query = `
    *[_type == "post"]
    { _id, slug, title, categories[]->{title}, publishedAt, mainImage, author->{name, image}
    }
    | order(publishedAt desc)  
  `;
  const posts = await client.fetch(query);
  return posts as Post[];
}

export const getPaginatedBlogPostsPreview = async (page: number, limit: number): Promise<Post[]> => {
  const start = page > 1 ? (page - 1) * limit : 0;
  const end = start + limit;
  const query = `
    *[_type == "post"]
    { 
      _id, 
      slug, 
      title, 
      categories[]->{title}, 
      publishedAt, 
      mainImage, 
      author->{name, image}
    }
    | order(publishedAt desc)  
    [$start..$end]
  `;  
  const posts = await client.fetch(query, { start, end });
  return posts as Post[];
}

export const getBlogPostBySlug = async (slug: string): Promise<Post | null> => {
  const query = `
    *[_type == "post" && slug.current == $slug][0..0]
  `;
  const post = await client.fetch(query, { slug });
  if (!post) return null;
  return post as Post | null;
}