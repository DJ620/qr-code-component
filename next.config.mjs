/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/qr-code-component",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
