/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/tst-web-app' : '',
    output: 'export',  // Enable static exports
    assetPrefix: process.env.NODE_ENV === 'production' ? '/tst-web-app/' : '',
    trailingSlash: true,
    images: {
        unoptimized: true, // Required for static export
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allows all HTTPS domains
            }
        ],
        domains: [
            'connectivity.esa.int',
            'cdn.public.lu',
            'ses-techcom.com',
            'tstgroup.de'
        ],
        unoptimized: true
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    }
};

module.exports = nextConfig; 