"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function ContactAndFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is my technology allowed on tech?",
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      question: "How to soft launch your business?",
      answer: "There are many variations of passages the majority",
    },
    {
      question: "How to turn visitors into contributors",
      answer:
        "have suffered alteration in some fo injected humour, or randomised words believable",
    },
    {
      question: "How can I find my solutions?",
      answer: "There are many variations of passages the majority",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative  flex items-center justify-center ">
      {/* Full-width Background Images */}
      <div className="absolute inset-0 flex gap-8">
        {/* Contact Form Background */}
        <div className="w-1/2 bg-[url('/contactAndFAQ.jpg')] bg-cover bg-center relative">
          {/* Dark Overlay */}
          <div className="absolute left-0 top-0 h-full w-full bg-[#222429] opacity-80"></div>
        </div>
        {/* FAQ Section Background */}
        <div className="w-1/2 bg-[url('/contactAndFAQ1.jpg')] bg-cover bg-center"></div>
      </div>

      {/* Content Wrapper with Max Width */}
      <div className="relative w-full max-w-[1200px] flex  px-8">
        {/* Contact Form */}
        <div className="w-1/2 flex items-start justify-center py-[70px] pr-[70px]">
          <div className="w-full bg-[#2c2e33] p-[55px] border-t-[6px] border-[#ffaa17] text-left">
            <h4 className="block text-[12px] text-[#ffaa17] font-bold uppercase tracking-[0.1em] mb-[2px]">
              Contact Us
            </h4>
            <h2 className="text-[34px] text-white font-bold mb-[25px]">
              Write Email
            </h2>
            <form className="space-y-5">
              <input
                className="w-full p-3 bg-transparent border-[1px] border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full p-3 bg-transparent border-[1px] border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                type="email"
                placeholder="Email Address"
              />

              <input
                className="w-full p-3 bg-transparent border-[1px] border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                type="tel"
                placeholder="Phone Number"
              />
              <textarea
                className="w-full p-3 bg-transparent border-[1px] border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                rows={4}
                placeholder="Write a Message"
              ></textarea>
              <button className=" relative  py-3 px-[40px] text-[12px] leading-[24px] font-bold tracking-[0.1em] uppercase inline-block text-black  hover:bg-yellow-600  bg-[#ffaa17] overflow-hidden transition-all duration-500 ease-in-out before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-[#222429] before:transition-all before:duration-500 before:ease-in-out hover:text-white hover:before:top-0">
                <span className="relative z-10 transition-colors duration-300 ease-in-out">
                  SEND A MESSAGE
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-1/2  flex text-left">
          <div className="w-full  bg-opacity-90 py-[70px] ps-[70px] rounded-lg">
            <h3 className="question-answer-heading"> Questions & Answers</h3>

            <h2 className="text-5xl font-bold mb-10">
              See Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="">
                  <button
                    className={`relative w-full p-[20px_20px_20px_30px] flex justify-between items-center text-[18px] leading-[25px] font-bold cursor-pointer transition-all duration-500 border-b border-[#f4f5f8] ${
                      openIndex === index
                        ? "bg-[#ffaa17] text-[#222429]"
                        : "bg-white text-[#222429]"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="pr-[70px">{faq.question}</span>
                    {openIndex === index ? <Minus /> : <Plus />}
                  </button>

                  {openIndex === index && (
                    <div className="block text-[16px] text-[#808287] mb-0 py-[25px] px-[30px] bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
