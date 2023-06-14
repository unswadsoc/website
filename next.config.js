/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.prismic.io',
            port: '',
            pathname: '/adsocunsw/**',
          },
          {
            protocol: 'https',
            hostname: 'scontent.fsyd5-1.fna.fbcdn.net',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'scontent-atl3-1.xx.fbcdn.net',
            port: '',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig
