/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primary_light: 'var(--color-primary-light)',
        primary_dark: 'var(--color-primary)',
        text_primary: 'var(--color-text-primary)',
        text_dark: 'var(--color-text-dark)',
        bg_global: 'var(--color-bg-global)',
        bg_card: 'var(--color-bg-card)',
      }
    },
  },
  plugins: [],
}

