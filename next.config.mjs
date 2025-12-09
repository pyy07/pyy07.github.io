/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 原生支持 Next.js，不需要静态导出
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

