/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

/**
 * Next.js configuration optimized for both development and production
 */
const nextConfig = {
    basePath: isProd ? '/tst-web-app' : '',
    assetPrefix: isProd ? '/tst-web-app/' : '',
    
    // Production-specific settings
    ...(isProd && {
        output: 'export',
        trailingSlash: true,
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
        }
    }),
    
    // Development-specific settings
    ...(!isProd && {
        images: {
            domains: [
                'connectivity.esa.int',
                'cdn.public.lu',
                'ses-techcom.com',
                'tstgroup.de'
            ]
        },
        // Enable React strict mode for better development experience
        reactStrictMode: true,
        // Enable faster refresh
        webpack: (config, { dev, isServer }) => {
            if (dev && !isServer) {
                // Enable fast refresh in development
                config.optimization.splitChunks = false;
            }
            // SVG handling
            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack']
            });
            return config;
        }
    })
};

module.exports = nextConfig; 