/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.crocdn.co.uk'],
  },
}

module.exports = nextConfig
