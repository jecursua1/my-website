/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    const sections = ['about', 'services', 'experience', 'projects', 'skills', 'contact']
    return sections.map((s) => ({ source: `/${s}`, destination: '/' }))
  },
};

export default nextConfig;
