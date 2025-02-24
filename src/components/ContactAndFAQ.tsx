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
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative flex items-center justify-center py-8 sm:py-10 px-6 sm:px-10">
      {/* Content Wrapper with Max Width */}
      <div className="relative w-full max-w-7xl">
        {/* Grid Layout for Responsive Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="flex items-start justify-center  ">
            <div className="w-full bg-[#2c2e33] p-6 sm:p-10 lg:p-[55px] border-t-[6px] border-[#ffaa17] text-left">
              <h4 className="text-[12px] text-[#ffaa17] font-bold uppercase tracking-[0.1em] mb-[2px]">
                Contact Us
              </h4>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] text-white font-bold mb-5">
                Write Email
              </h2>
              <form className="space-y-4 sm:space-y-5">
                <input
                  className="w-full p-3 bg-transparent border border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="w-full p-3 bg-transparent border border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="w-full p-3 bg-transparent border border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                  type="tel"
                  placeholder="Phone Number"
                />
                <textarea
                  className="w-full p-3 bg-transparent border border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                  rows={4}
                  placeholder="Write a Message"
                ></textarea>
                <button className="relative py-3 px-10 text-[12px] leading-[24px] font-bold tracking-[0.1em] uppercase inline-block text-black bg-[#ffaa17] hover:bg-yellow-600 overflow-hidden transition-all duration-500 ease-in-out before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-[#222429] before:transition-all before:duration-500 before:ease-in-out hover:text-white hover:before:top-0">
                  <span className="relative z-10 transition-colors duration-300 ease-in-out">
                    SEND A MESSAGE
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-left ">
            <h3 className="text-lg sm:text-xl font-semibold text-[#ffaa17] question-answer-heading">
              Questions & Answers
            </h3>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10">
              See Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="">
                  <button
                    className={`relative w-full p-4 flex text-left justify-between items-center text-lg font-bold cursor-pointer transition-all duration-500 border-b border-[#f4f5f8] ${
                      openIndex === index
                        ? "bg-[#ffaa17] text-[#222429]"
                        : "bg-white text-[#222429]"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="pr-10">{faq.question}</span>
                    {openIndex === index ? <Minus /> : <Plus />}
                  </button>

                  {openIndex === index && (
                    <div className="block text-base text-[#808287] py-5 px-6 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
