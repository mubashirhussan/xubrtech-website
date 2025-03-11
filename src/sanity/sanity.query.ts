import groq from "groq";
import client from "../../client";

// ✅ Query to get the list of all blog posts
export const getAllPosts = async () => {
  return await client.fetch(
    groq`*[_type == "post"] | order(_createdAt asc) {
      _id,
      title,
      "slug": slug.current,
      "author": author->name,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      publishedAt,
      excerpt
    }`
  );
};

// ✅ Query to get a single post by slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  ...,
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

export const getAllPostSlugs = async (): Promise<string[]> => {
  return await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );
};

export const getPostBySlug = async (slug: string) => {
  return await client.fetch(postQuery, { slug });
};
