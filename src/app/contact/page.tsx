/* eslint-disable @typescript-eslint/no-explicit-any */

import ContactAndFAQ from "@/components/ContactAndFAQ";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Xubrtech IT Solutions",
  description:
    "Get in touch with Xubrtech IT Solutions for inquiries, support, and collaborations. We're here to help!",
  openGraph: {
    title: "Contact Us - Xubrtech IT Solutions",
    description:
      "Reach out to Xubrtech IT Solutions for IT consulting, support, and business inquiries. Let's connect!",
    url: "https://yourdomain.com/contact",
    siteName: "Xubrtech IT Solutions",
    images: [
      {
        url: "https://yourdomain.com/contact-thumbnail.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Contact Xubrtech IT Solutions",
      },
    ],
    type: "website",
  },
};

export default async function ContactPage() {
  return (
    <>
      <ContactAndFAQ />
    </>
  );
}
