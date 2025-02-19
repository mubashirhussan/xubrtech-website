import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: ["./src/styles"],
  },

  images: {
    domains: ["randomuser.me"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

export default nextConfig;
