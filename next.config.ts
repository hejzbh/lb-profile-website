import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    after: true,
  },
  images: {
    domains: ["lbprofile.de", "lbprofile.com", "lbprofile.blueduck.at"],
  },
  async rewrites() {
    return [
      {
        source: "/bs-BA/kontakt",
        destination: "/bs-BA/contact-us",
      },
    ];
  },
};

export default nextConfig;
