/* eslint-disable @typescript-eslint/no-explicit-any */

import NewsSection from "@/components/Blogs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Detail | Xubrtech IT Solutions",
  description: "Read our latest blog post on cutting-edge IT solutions.",
  openGraph: {
    title: "Blog Detail - Xubrtech IT Solutions",
    description: "Learn more about IT innovations and solutions in our blog.",
    url: "https://yourdomain.com/blogdetail",
    siteName: "Xubrtech IT Solutions",
    images: [
      {
        url: "https://yourdomain.com/blog-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Thumbnail",
      },
    ],
    type: "article",
  },
};
export default async function BlogsPage() {
  return (
    <>
      <NewsSection />
    </>
  );
}
