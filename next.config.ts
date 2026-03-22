import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* your existing config options */
  webpack: (config) => {
    // Add alias @ => src
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;