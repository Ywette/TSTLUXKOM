/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/TSTLUXKOM' : '';

/**
 * Next.js configuration optimized for both development and production
 */
const nextConfig = {
    basePath,
    assetPrefix: isProd ? `${basePath}/` : '',
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
            'connectivity.esa.int',
            'cdn.public.lu',
            'ses-techcom.com',
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