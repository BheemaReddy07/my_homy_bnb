
/** @type {import('next').NextConfig} */
const nextConfig = {
     productionSourceMaps: true,
    images: {
        remotePatterns: [
            { 
                protocol: 'https',
                hostname: 'tnex3v0ckf3iarvi.public.blob.vercel-storage.com'
            },
            { 
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            }
        ]
    }
};

export default nextConfig;
