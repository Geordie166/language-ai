/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Disable image optimization for the MVP
  images: {
    unoptimized: true,
  },
  // Configure trailing slashes behavior
  trailingSlash: false,
};

module.exports = nextConfig; 