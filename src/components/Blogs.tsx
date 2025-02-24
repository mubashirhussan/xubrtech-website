import Image from "next/image";

import { ArrowRight, Calendar, MessageCircle, User } from "lucide-react";

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      image: "/news-1.jpg",
      date: "28 OCT",
      author: "Admin",
      category: "Technology",
      title: "Professional technology information & solutions are just like...",
      comments: 2,
    },
    {
      id: 2,
      image: "/news-2.jpg",
      date: "28 OCT",
      author: "Admin",
      category: "Technology",
      title: "Professional technology information & solutions are just like...",
      comments: 2,
    },
    {
      id: 3,
      image: "/news-3.jpg",
      date: "28 OCT",
      author: "Admin",
      category: "Technology",
      title: "Professional technology information & solutions are just like...",
      comments: 2,
    },
  ];

  return (
    <section className="py-8 sm:py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="news-heading">From The Blog</p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-12 mt-2">
          News & Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8   mt-10">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white shadow-md  overflow-hidden">
              {/* Image Section */}
              <div className="relative ">
                <Image
                  src={news.image}
                  alt={news.title}
                  className="w-full  object-cover "
                  width={400}
                  height={300}
                />
                <div className="absolute top-3 right-3 bg-[#ffaa17] text-white text-xs font-bold px-3 py-2 rounded">
                  {news.date.split(" ")[0]} <br /> {news.date.split(" ")[1]}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8">
                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <span className="flex items-center gap-1">
                    <User size={14} className="text-[#ffaa17]" /> {news.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#ffaa17]" />{" "}
                    {news.category}
                  </span>
                </div>

                <h3 className="text-2xl text-left font-semibold text-gray-900 mt-3 hover:text-[#ffaa17] transition duration-300 cursor-pointer">
                  {news.title}
                </h3>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center  p-4 bg-[#f4f5f8]  border-solid border-[#e6e8ed] text-sm ">
                <button className="flex items-center gap-1 text-[#808287] font-semibold hover:underline hover:text-[#ffaa17] transition duration-300">
                  READ MORE
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#ffaa17]" />
                </button>
                <span className="flex items-center gap-1">
                  <MessageCircle size={16} className="text-[#ffaa17]" />{" "}
                  {news.comments}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
