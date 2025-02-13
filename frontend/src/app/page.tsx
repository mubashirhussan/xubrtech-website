import variables from "../styles/variables.module.scss";
async function loader() {
  const BASE_URL = "http://127.0.0.1:1337";
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  const response = await fetch(url.href);
  const data = await response.json();
  console.log(data);
  return data.data.attributes;
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
