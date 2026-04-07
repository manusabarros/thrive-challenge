import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      new URL("https://rickandmortyapi.com/api/character/avatar/**"),
    ],
  },
};

export default nextConfig;
