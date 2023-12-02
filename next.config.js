/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        staticFolder: '/public'
    },
    async rewrites() {
       return [
        {
            source: '/api/:path*',
            destination: 'http://localhost:8080/api/v1/:path*',
        }
    ]
}
    
}

module.exports = nextConfig
