/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'toolscity.s3.ap-northeast-2.amazonaws.com',
      'images.unsplash.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
