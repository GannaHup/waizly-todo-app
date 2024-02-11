/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
      },
    ],
  },
  env: {
    API_KEY_WEATHER: process.env.NEXT_PUBLIC_API_KEY_WEATHER,
    WEATHER_API: process.env.NEXT_PUBLIC_WEATHER_API
  }
};

module.exports = nextConfig;
