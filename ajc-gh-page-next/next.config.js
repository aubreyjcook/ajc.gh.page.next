// ✅ Works with all Node.js versions, no special setup needed
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/ajc-gh-page-next' : '',
  assetPrefix: isProd ? '/ajc-gh-page-next/' : '',
};

module.exports = nextConfig;