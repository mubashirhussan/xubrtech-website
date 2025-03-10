/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";

import { getAllPosts } from "@/sanity/sanity.query";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../../client";

export default async function BlogsPage() {
  const blogs = await getAllPosts();
  function urlFor(source: any) {
    return imageUrlBuilder(client).image(source);
  }
  console.log("blogs", blogs);
  return (
    <div className="lg:max-w-7xl mx-auto max-w-3xl md:px-10 px-6 my-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog: any) => (
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Featured Image */}
            {blog.mainImage && (
              <div className="relative w-full ">
                <Image
                  src={urlFor(blog.mainImage)
                    .width(800)
                    .height(600)
                    .quality(90)
                    .url()} // HD Image
                  alt={blog.title}
                  width={800}
                  height={600}
                  className="w-full  object-cover"
                />
              </div>
            )}

            {/* Blog Content */}
            <div className="p-6">
              <Link href={`/blogs/${blog.slug}`}>
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-[#ffaa17] transition">
                  {blog.title}
                </h2>
              </Link>
              <p className="text-gray-600 mt-3">
                {blog.excerpt?.substring(0, 120)}...
              </p>

              <div className="mt-4">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-block text-[#ffaa17] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
