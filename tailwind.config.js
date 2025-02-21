/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        textPrimary: 'var(--color-text-primary)',
        textDark: 'var(--color-text-dark)',
        bgGlobal: 'var(--color-bg-global)',
        bgCard: 'var(--color-bg-card)',
      }
    },
  },
  plugins: [],
}

