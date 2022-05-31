/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.kanjialive.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
