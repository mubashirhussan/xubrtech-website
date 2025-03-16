/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import toast, { Toaster } from "react-hot-toast";
export default function ContactAndFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
  };

  const handlePhoneChange = (phone: string) => {
    setFormData({ ...formData, phone });
    setErrors({ ...errors, phone: "" }); // Clear error on input
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({ name: "", email: "", phone: "", message: "" }); // Reset errors
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong. Please try again!");
    }

    setLoading(false);
  };
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
          <div className="flex items-start justify-center">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="w-full bg-[#2c2e33] p-6 sm:p-10 lg:p-[55px] border-t-[6px] border-[#ffaa17] text-left">
              <h4 className="text-[12px] text-[#ffaa17] font-bold uppercase tracking-[0.1em] mb-[2px]">
                Contact Us
              </h4>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] text-white font-bold mb-5">
                Write Email
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <input
                    className="w-full p-3 bg-transparent border border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    className="w-full p-3 bg-transparent border border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <PhoneInput
                    country={"us"}
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputClass="form-control"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <textarea
                    className="w-full p-3 bg-transparent border border-[rgba(255,255,255,0.15)] text-white focus:outline-none focus:border-[#ffaa17]"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write a Message"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="relative py-3 px-10 text-[12px] leading-[24px] z-10 font-bold tracking-[0.1em] uppercase inline-block text-black bg-[#ffaa17] hover:bg-yellow-600 overflow-hidden transition-all duration-500 ease-in-out hover:text-white"
                >
                  <span className="relative z-10 transition-colors duration-300 ease-in-out">
                    {loading ? "Sending..." : "SEND A MESSAGE"}
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
