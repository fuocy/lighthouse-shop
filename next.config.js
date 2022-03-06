/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "source.unsplash.com"],
  },
  async redirects() {
    return [{ source: "/", destination: "/men", permanent: true }];
  },
};

module.exports = nextConfig;
