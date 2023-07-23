/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    URLAPI: process.env.URLAPI ||  "http://localhost:1337",
    // BASEURL: process.env.BASEURL ||  "https://kampuscoding.com",
  },
  images: {
    domains: ['127.0.0.1', 'localhost'],

  },
}

module.exports = nextConfig
