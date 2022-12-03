/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   images: {
     domains: ['cdn.sanity.io'],
     formats: ['image/webp'],
  },
}

module.exports = nextConfig
