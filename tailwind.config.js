/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flos': {
          dark: 'var(--flos-dark)',
          light: 'var(--flos-light)',
          gray: 'var(--flos-gray)',
          muted: 'var(--flos-muted)',
          bg: 'var(--flos-bg)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}