// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export'
  eslint:{
    ignoreDuringBuilds: true
  }
}

module.exports = withContentlayer(nextConfig)
