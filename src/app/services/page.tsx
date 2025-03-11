/* eslint-disable @typescript-eslint/no-explicit-any */
import Services from "@/components/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Services | Xubrtech IT Solutions",
  description:
    "Explore our cutting-edge IT services, including software development, cloud solutions, AI integration, and more.",
  openGraph: {
    title: "Our Services - Xubrtech IT Solutions",
    description:
      "Discover Xubrtech IT Solutions' wide range of services, from web and app development to AI-driven solutions and IT consulting.",
    url: "https://yourdomain.com/services",
    siteName: "Xubrtech IT Solutions",
    images: [
      {
        url: "https://yourdomain.com/services-thumbnail.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Xubrtech IT Solutions Services",
      },
    ],
    type: "website",
  },
};

export default async function ServicesPage() {
  return (
    <>
      <Services />
    </>
  );
}
