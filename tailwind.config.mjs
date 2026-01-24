/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        shell: {
          deep: '#0D1117',
          surface: '#161B22',
          border: '#30363D',
        },
        toxic: {
          DEFAULT: '#39FF14',
          dim: 'rgba(57, 255, 20, 0.1)',
        },
        biolume: {
          DEFAULT: '#BD34FE',
        },
        muted: '#8B949E',
        ghost: '#E6EDF3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'toxic-glow': '0 0 15px -3px rgba(57, 255, 20, 0.5)',
      },
    },
  },
  plugins: [],
}
