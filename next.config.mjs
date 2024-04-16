/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://variety.co.ke/wp-json/:path*",
      },
    ];
  },
};

export default nextConfig;
