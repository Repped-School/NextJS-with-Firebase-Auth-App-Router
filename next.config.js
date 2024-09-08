/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React Strict Mode can help identify potential issues but is not required for DevTools.
  eslint: {
    dirs: ['pages', 'components', 'lib'], // Run ESLint on specified directories during development
  },
};

module.exports = nextConfig;
