// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {

//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**',
//       },
//     ],
//   },
//   experimental: {
//     proxyTimeout: 60000, 
//   }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
};

export default nextConfig;