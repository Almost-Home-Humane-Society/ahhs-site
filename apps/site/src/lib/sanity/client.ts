import { dev } from "$app/environment";
import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const config: ClientConfig = {
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: 'prod',
  useCdn: !dev,
  apiVersion: new Date().toISOString().slice(0, 10)
}

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}