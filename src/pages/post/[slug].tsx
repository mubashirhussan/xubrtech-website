/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// [slug].tsx

import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import client from "../../../client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { GetStaticPaths, GetStaticProps } from "next";

// 📌 Define Post Data Interfaces
interface Category {
  title: string;
}

interface Author {
  name: string;
  image?: SanityImageSource;
}

interface Post {
  title?: string;
  name?: string;
  categories?: Category[];
  authorImage?: SanityImageSource;
  body?: any; // PortableText content can vary, so `any` or a more specific type can be used
}

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value)
            .width(320)
            .height(240)
            .fit("max")
            .auto("format")
            .url()}
        />
      );
    },
  },
};

// 📌 Define Props for Post Component
interface PostProps {
  post: Post;
}

// 📌 Post Component
const Post = ({ post }: PostProps) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body = [],
  } = post;

  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in:
          {categories.map((category) => (
            <li key={category.title}>{category.title}</li>
          ))}
        </ul>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage).width(50).url()}
            alt={`${name}'s picture`}
          />
        </div>
      )}
      <PortableText value={body} components={ptComponents} />
    </article>
  );
};

// 📌 GROQ Query to Fetch Data
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

// 📌 getStaticPaths - Generates Paths for Static Pages
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

// 📌 getStaticProps - Fetches Data for a Specific Post
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "" } = context.params as { slug: string };
  const post = await client.fetch(query, { slug });

  return {
    props: {
      post,
    },
  };
};

export default Post;
