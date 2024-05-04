/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    serverComponentsExternalPackages: ["@whatwg-node/server", "@whatwg-node"],
  },
};

export default nextConfig;
