/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = nextConfig

// next.config.js
const withImages = require('next-images');
module.exports = withImages();

// module.exports = {
//   images: {
//     disableStaticImages: true
//   }
// }