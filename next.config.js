// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  turbopack: {
    resolveAlias: {
      fs: { browser: './utils/empty.js' },
      path: { browser: './utils/empty.js' }
    }
  }
}
module.exports = nextConfig;



/**
 *
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  }

 */