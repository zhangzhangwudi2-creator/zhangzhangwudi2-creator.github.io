/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 奶龙明黄与水豚柑橘
        nailong: '#FFD43B',
        'nailong-dark': '#E0AC00',
        capy: '#FF922B',
        'capy-dark': '#E8590C',
        matcha: '#2B8A3E',
        // 咖啡黑与暖深色
        coffee: '#2C221E',
        'coffee-light': '#4A3F35',
        oatmeal: '#FFFDF7',
        'dark-oat': '#181512',
        'dark-surface': '#241F1B',
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px #2C221E',
        'brutal': '4px 4px 0px #2C221E',
        'brutal-lg': '6px 6px 0px #2C221E',
        'brutal-dark': '4px 4px 0px #000000',
        'brutal-dark-lg': '6px 6px 0px #000000',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
