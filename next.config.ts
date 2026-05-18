import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  // 🚀 Force URLs to NOT have a trailing slash globally
  trailingSlash: false,

  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
