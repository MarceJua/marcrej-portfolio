import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // genera archivos estáticos
  images: {
    unoptimized: true, // Necesario para el modo export
  },
};

export default nextConfig;