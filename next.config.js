const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.pdf$/,
        use: ["file-loader"],
      },
      {
        test: /\.node$/,
        use: ["node-loader"],
      }
    );

    return config;
  },
};

module.exports = nextConfig;
