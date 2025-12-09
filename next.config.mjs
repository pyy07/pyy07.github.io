/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 允许动态路由在静态导出时工作
  trailingSlash: true,
};

export default nextConfig;

