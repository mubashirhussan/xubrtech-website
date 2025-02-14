import { getHomePage } from "@/data/loaders";
import variables from "../styles/variables.module.scss";
import { notFound } from "next/navigation";
async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  console.log(data);
  return { ...data.data.attributes };
}
export default async function Home() {
  const data = await loader();
  console.log(data);
  return (
    <div className="text-center">
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      <h2>Xubrtech</h2>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
