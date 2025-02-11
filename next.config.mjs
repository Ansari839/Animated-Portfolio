/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Add this line for static export
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
