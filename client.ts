import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "3aauiptw",
  dataset: "production", // or the name you chose in step 1
  apiVersion: "2024-07-01",
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
