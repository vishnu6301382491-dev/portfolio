const BASE = '/portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: BASE,
  assetPrefix: `${BASE}/`,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: BASE },
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;
