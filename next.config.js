/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
}

// module.exports = {
//   // other configurations...
//   target: 'experimental-serverless-trace',
//   exportPathMap: async function () {
//     return {
//       '/': { page: '/' },
//       // Add other routes if needed
//     };
//   },
//   distDir: 'out',
// };

module.exports = nextConfig
