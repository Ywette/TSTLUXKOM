import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all HTTPS domains (less secure but flexible)
      }
    ],
    // OR list specific domains:
    domains: [
      'connectivity.esa.int/',
      'cdn.public.lu/',
      'ses-techcom.com',
      'tstgroup.de',
      // Add as many as needed
    ], 
  },
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
};

export default nextConfig;
