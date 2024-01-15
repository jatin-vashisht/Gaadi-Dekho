/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.logomaker.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.imagin.studio'
            },
        ]
    }
}

module.exports = nextConfig
