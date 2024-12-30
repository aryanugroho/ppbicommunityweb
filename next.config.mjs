/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    outputFileTracingIncludes: {
      '/articles/*': ['./src/app/articles/**/*.mdx'],
    },
  },
}

module.exports = nextConfig;
