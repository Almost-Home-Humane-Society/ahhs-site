import type { Category, SanityImageAsset, Slug } from "$lib/sanity/sanity.types"

export type PostPreviewType = {
  author?: {
    image: SanityImageAsset;
    name: string;
  },
  categories: Category[];
  mainImage?: SanityImageAsset;
  publishedAt?: Date;
  slug?: Slug;
  title?: string;
  _id: string;
}