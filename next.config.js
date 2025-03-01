/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

/**
 * Next.js configuration optimized for both development and production
 */
const nextConfig = {
    basePath: isProd ? '/tst-web-app' : '',
    assetPrefix: isProd ? '/tst-web-app/' : '',
    output: 'export',
    images: {
        unoptimized: true,
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
        ]
    },
    
    // Production-specific settings
    ...(isProd && {
        trailingSlash: true,
    }),
    
    // Development-specific settings
    webpack: (config) => {
        // SVG handling
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        
        return config;
    }
};

module.exports = nextConfig; 