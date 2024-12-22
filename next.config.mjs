/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dqcxviiyjskhxkupelvr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/product/**",
      },
    ],
  },
};

export default nextConfig;
