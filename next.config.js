/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/TSTLUXKOM' : '';

/**
 * Next.js configuration optimized for both development and production
 */
const nextConfig = {
    basePath,
    assetPrefix: isProd ? `${basePath}/` : '',
    output: 'export',
    trailingSlash: true, // Always add trailing slashes
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
    
    // Development-specific settings
    webpack: (config) => {
        // Handle SVG files
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    },

    // Ensure CSS is properly extracted
    optimizeFonts: false,
    
    // Production optimizations
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    
    // Ensure all static files are copied
    distDir: 'out',
    cleanDistDir: true,
    
    // Ensure static assets are handled correctly
    publicRuntimeConfig: {
        basePath: basePath
    }
};

module.exports = nextConfig; 