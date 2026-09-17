/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
  },
  sassOptions: {
    includePaths: ['./styles'],
  },
};

export default nextConfig;
