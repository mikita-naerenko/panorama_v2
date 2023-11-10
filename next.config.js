// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: 'export',
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/panorama_v2', // Update this to the base path of your project
  target: 'experimental-serverless-trace',
};


module.exports = nextConfig
