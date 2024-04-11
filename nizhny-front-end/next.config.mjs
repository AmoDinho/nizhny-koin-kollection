/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zpcbncxtprtxcantyxey.supabase.co',
        pathname: '/storage/v1/object/public/nizhny-koin-ref/**',
      },
    ],
  },
};

export default nextConfig;
