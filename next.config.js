/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'michaelpons.com',
      },
    ],
  },
};

module.exports = nextConfig;
