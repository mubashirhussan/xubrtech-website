// import { getHomePage } from "@/data/loaders";
// import variables from "../styles/variables.module.scss";
// import { notFound } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import ContactAndFAQ from "@/components/ContactAndFAQ";
import Testimonials from "@/components/Testimonials";
import AboutCompany from "@/components/AboutCompany";
import NewsSection from "@/components/Blogs";
import AdComponent from "@/components/AdComponent";
// async function loader() {
//   const data = await getHomePage();
//   if (!data) notFound();
//   return { ...data.data };
// }
export default async function HomeRoute() {
  // const data = await loader();
  // const blocks = data?.blocks || [];
  // console.log(data);
  return (
    // <div className="text-center">
    //   <AdComponent />
    //   <Navbar />
    //   <HeroSection />
    //   <Services />
    //   <AboutCompany />
    //   <Testimonials />
    //   <ContactAndFAQ />
    //   <NewsSection />
    //   <Footer />
    // </div>
    <div className="text-center">
      <Navbar />
      <AdComponent /> {/* Ad after Navbar for better visibility */}
      <HeroSection />
      <Services />
      <AdComponent /> {/* Ad between sections */}
      <AboutCompany />
      <Testimonials />
      <ContactAndFAQ />
      <NewsSection />
      <AdComponent /> {/* Ad before Footer */}
      <Footer />
    </div>
  );
}
