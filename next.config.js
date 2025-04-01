/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/TSTLUXKOM' : '';

/**
 * Next.js configuration optimized for both development and production
 */
const nextConfig = {
    output: 'export',
    basePath,
    assetPrefix: isProd ? '/TSTLUXKOM/' : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ],
        domains: [
            'cdn.public.lu',
            'govsat.lu',
            'ses-techcom.com',
            'tst-fahrzeugbau.com',
            'tstgroup.de'
        ]
    },
    
    webpack: (config) => {
        // Handle SVG files
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    },

    optimizeFonts: false,
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    
    publicRuntimeConfig: {
        basePath: basePath
    }
};

module.exports = nextConfig; 