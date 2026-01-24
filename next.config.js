/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Performance optimizations
  compress: true,
  // Enable SWC minification
  swcMinify: true,
}

module.exports = nextConfig
