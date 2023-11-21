/** @type {import('next').NextConfig} */
const nextConfig = {
    source: '/api/:path*',
    destination: 'http://localhost:8080/api/v1/:path*',
}

module.exports = nextConfig
