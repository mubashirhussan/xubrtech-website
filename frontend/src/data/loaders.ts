import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";
const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: {
            images: {
              fields: ["url", "alternativeText"],
            },
            cta: true,
          },
        },
        "blocks.about-us": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            cta: true,
          },
        },
      },
    },
  },
});
export async function getHomePage() {
  const BASE_URL = getStrapiURL();
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;
  return await fetchAPI(url.href, { method: "GET" });
}
