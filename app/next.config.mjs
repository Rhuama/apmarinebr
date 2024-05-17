/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['scontent.cdninstagram.com'],
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://graph.instagram.com/:path*',
        },
      ]
    },
  };
  
  export default nextConfig;
  