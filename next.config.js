/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        port: '',
        pathname: '/api/mcp/asset/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize production builds
  swcMinify: true,
  
  // Add any redirects you need
  async redirects() {
    return [
      // Example redirect:
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ]
  },
  
  // Add custom headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
