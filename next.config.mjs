/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/english-house',
  assetPrefix: '/english-house',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
