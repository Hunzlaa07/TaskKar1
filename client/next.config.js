/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ✅ this enables static export
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8747",
      },
    ],
  },
};

module.exports = nextConfig;
