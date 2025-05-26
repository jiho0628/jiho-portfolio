// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',     // ネイビーブルー
        secondary: '#f1f5f9',   // 明るめのグレー
      },
    },
  },
  plugins: [],
}