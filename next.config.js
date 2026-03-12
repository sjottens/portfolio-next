/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['images.ctfassets.net', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
