import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false,
  },
  webpack: (config) => {
    // Ensure resolve and alias exist
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias) config.resolve.alias = {};

    // Add @ alias safely
    (config.resolve.alias as Record<string, string>)["@"] = path.resolve(__dirname, "src");

    return config;
  },
} as NextConfig;

export default nextConfig;