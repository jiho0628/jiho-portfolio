// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/globals.css',
  ],
  theme: {
    extend: {
      fontSize: {
        // 独自の名前とサイズを定義（[font-size, line-height]）
        'hero': ['4rem'], // 60px
        'sub-title': ['1.8rem'], // 30px
        'caption': ['1.25rem'], // 20px
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        darkblue: 'var(--color-darkblue)',
        darkgray: 'var(--color-darkgray)',
        lightgray: 'var(--color-lightgray)',
        whitegray: 'var(--color-whitegray)'
      },
    },
  },
  plugins: [],
}