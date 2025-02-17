import { getHomePage } from "@/data/loaders";
// import variables from "../styles/variables.module.scss";
import { notFound } from "next/navigation";
import HeroSection from "@/components/HeroSection";
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
      <HeroSection {...blocks[0]} />
    </div>
  );
}
