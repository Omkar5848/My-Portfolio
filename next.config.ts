/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: If you decide to use the <Image> component later, 
  // you must unoptimize images for static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;