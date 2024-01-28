/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
// module.exports = {
//     typescript: {
//       // !! WARN !!
//       // Dangerously allow production builds to successfully complete even if
//       // your project has type errors.
//       // !! WARN !!
//       ignoreBuildErrors: true,
//     },
//   }
