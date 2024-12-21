import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    after: true,
  },
  images: {
    domains: ["lbprofile.de", "lbprofile.com"],
  },
  async rewrites() {
    return [
      {
        source: "/bs/kontakt",
        destination: "/bs/contact-us",
      },
    ];
  },
};

export default nextConfig;
