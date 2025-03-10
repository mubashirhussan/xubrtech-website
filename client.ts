import { createClient } from "@sanity/client";
console.log("Sanity Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3aauiptw",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // or the name you chose in step 1
  apiVersion: "2024-07-01",
  useCdn: false, // `false` if you want to ensure fresh data
});

export default client;
