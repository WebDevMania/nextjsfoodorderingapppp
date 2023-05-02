/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {hostname: 'firebasestorage.googleapis.com', protocol: 'https', port: ''}
    ]
  }
}

module.exports = nextConfig