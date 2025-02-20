import Image from "next/image";

import { Calendar, MessageCircle, User } from "lucide-react";

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
    <section className="pt-[70px] pb-[70px] px-4 bg-gray-100">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="news-heading">From The Blog</p>
        <h2 className="text-5xl font-semibold text-gray-900 mb-[50px] mt-2">
          News & Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white shadow-md news-card">
            {/* Image Section */}
            <div className="image-container">
              <Image
                src={news.image}
                alt={news.title}
                className="w-full obj  object-cover"
                width={400}
                height={300}
              />
              <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-2 rounded">
                {news.date.split(" ")[0]} <br /> {news.date.split(" ")[1]}
              </div>
            </div>

            {/* Content */}
            <div className="px-[40px] py-[25px] pb-[35px]">
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <span className="flex items-center gap-1">
                  <User size={14} className="text-orange-500" /> {news.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="text-orange-500" />{" "}
                  {news.category}
                </span>
              </div>

              <h3 className="text-2xl  text-left font-semibold text-gray-900 mt-3 hover:text-orange-500 transition duration-300 cursor-pointer">
                {news.title}
              </h3>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t p-4 text-sm text-gray-500">
              <button className="text-orange-500 font-semibold hover:underline">
                READ MORE →
              </button>
              <span className="flex items-center gap-1">
                <MessageCircle size={16} className="text-orange-500" />0
                {news.comments}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
