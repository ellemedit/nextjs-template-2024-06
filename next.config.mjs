/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
    instrumentationHook: true,
    serverSourceMaps: true,
    reactCompiler: true,
  },
}

export default nextConfig
