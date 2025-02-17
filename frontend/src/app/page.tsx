import { getHomePage } from "@/data/loaders";
// import variables from "../styles/variables.module.scss";
import { notFound } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
}
export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  console.log(data);
  return (
    <div className="text-center">
      <Navbar />
      <HeroSection {...blocks[0]} />
      <Footer />
    </div>
  );
}
