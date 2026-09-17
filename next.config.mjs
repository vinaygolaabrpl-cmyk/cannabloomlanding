/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/dev/cannabloomlanding',
  assetPrefix: '/dev/cannabloomlanding/',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/dev/cannabloomlanding',
  },
  sassOptions: {
    includePaths: ['./styles'],
  },
};

export default nextConfig;
