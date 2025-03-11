/* eslint-disable @typescript-eslint/no-explicit-any */
// types.ts
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Category {
  title: string;
}

export interface Author {
  name: string;
  image?: SanityImageSource;
}

export interface Post {
  title?: string;
  name?: string;
  categories?: string[];
  authorImage?: SanityImageSource;
  body?: any;
}

export interface CodeBlockProps {
  value: {
    code: string;
    language: string;
  };
}

export interface PostProps {
  post: Post;
}
export interface Props {
  value: {
    code: string;
    language: string;
  };
}
export type PageProps = {
  params: {
    slug: string;
  };
};
export interface NewsSectionProps {
  limit?: boolean; // Pass true for home page, false for blogs page
}
