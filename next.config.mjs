/** @type {import('next').NextConfig} */
const nextConfig = {
    bundlePagesRouterDependencies: true,
    experimental: {
        reactCompiler: true,
    },
};

export default nextConfig;
