/** @type {import('next').NextConfig} */

/**
 * Next.js configuration for GitHub Pages deployment
 * - basePath and assetPrefix are set to '/TSTLUXKOM' in production for GitHub Pages
 * - Static export is enabled for GitHub Pages compatibility
 * - Images are unoptimized as required for static export
 */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/TSTLUXKOM' : '',
    output: 'export',  // Enable static exports
    assetPrefix: process.env.NODE_ENV === 'production' ? '/TSTLUXKOM/' : '',
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
        ]
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