/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io", "img.clerk.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
