/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    CONTACT_US_FORM_ID: process.env.CONTACT_US_FORM_ID,
    SUBSCRIBE_FORM_ID: process.env.SUBSCRIBE_FORM_ID,
    BASE_URL: process.env.BASE_URL,
    WIX_CLIENT_ID: process.env.WIX_CLIENT_ID,
    REVALIDATE_TIME: process.env.REVALIDATE_TIME,
  },
  images: {
    domains: ["static.wixstatic.com"],
  },
};

export default nextConfig;
