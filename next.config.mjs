/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep production builds isolated from a running `next dev` server.
  distDir: process.env.NODE_ENV === "development" ? ".next" : ".next-production",
  images: {
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pixieset.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
