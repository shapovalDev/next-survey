import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' };
    config.stats = { warnings: true, errors: true, errorDetails: true };
    return config;
  },
};

export default nextConfig;
