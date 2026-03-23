import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            {
                protocol: 'https',
                hostname: 'mklggxwnlxqlgcgtqkhs.supabase.co',
            },
        ],
    },
};

export default nextConfig;
