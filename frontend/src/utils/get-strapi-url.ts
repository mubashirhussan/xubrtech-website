export function getStrapiUrl() {
  return process.env.STRAPI_URL ?? "http://127.0.0.1:1337";
}
