/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures Next.js generates static files for GitHub Pages
  images: {
    unoptimized: true, // Fixes image optimization issue on GitHub Pages
  },
  basePath: "/your-repo-name", // Replace with your actual GitHub repo name
};

export default nextConfig;
