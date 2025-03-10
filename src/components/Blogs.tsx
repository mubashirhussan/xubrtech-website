/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { ArrowRight, Calendar, MessageCircle, User } from "lucide-react";
import { getAllPosts } from "@/sanity/sanity.query";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const NewsSection = async () => {
  const blogs = await getAllPosts();

  function urlFor(source: any) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <section className="py-8 sm:py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="news-heading">From The Blog</p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-12 mt-2">
          News & Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogs.map((blog: any) => (
            <div
              key={blog._id}
              className="bg-white shadow-md overflow-hidden flex flex-col h-full"
            >
              {/* Image Section */}
              {blog.mainImage && (
                <div className="relative">
                  <Image
                    src={urlFor(blog.mainImage).width(400).height(300).url()}
                    alt={blog.title}
                    className="w-full object-cover"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-3 right-3 bg-[#ffaa17] text-white text-xs font-bold px-3 py-2 rounded">
                    {new Date(blog.publishedAt).getDate()} <br />
                    {new Date(blog.publishedAt).toLocaleString("default", {
                      month: "short",
                    })}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-3 sm:p-5 flex-grow text-left">
                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <span className="flex items-center gap-1">
                    <User size={14} className="text-[#ffaa17]" />{" "}
                    {blog.author || "Admin"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#ffaa17]" />{" "}
                    {blog.categories?.[1] || "Uncategorized"}
                  </span>
                </div>

                <h3 className="text-2xl text-left font-semibold text-gray-900 mt-3 hover:text-[#ffaa17] transition duration-300 cursor-pointer">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {blog.excerpt?.substring(0, 120)}...
                </p>
              </div>

              {/* Footer with Read More at Bottom */}
              <div className="mt-auto">
                <div className="p-4 bg-[#f4f5f8]  border-[#e6e8ed] flex justify-between items-center text-sm">
                  <a
                    href={`/blogs/${blog.slug}`}
                    className="flex items-center gap-1 text-[#808287] font-semibold hover:underline hover:text-[#ffaa17] transition duration-300"
                  >
                    READ MORE
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#ffaa17]" />
                  </a>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={16} className="text-[#ffaa17]" />{" "}
                    {blog.comments || 0}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
