import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://s4.anilist.co/file/anilistcdn/media/**'),
      new URL('https://lastfm.freetls.fastly.net/i/u/**'),
      new URL('https://image.tmdb.org/t/p/**')
    ],
  }
};

export default nextConfig;
