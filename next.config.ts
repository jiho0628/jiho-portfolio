// next.config.ts または next.config.js
const withNextIntl = require('next-intl/plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false, // ← これで完全に非表示にできる
};

module.exports = withNextIntl(nextConfig);