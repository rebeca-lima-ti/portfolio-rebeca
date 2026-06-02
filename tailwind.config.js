/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        caveat: ['"Caveat"', 'cursive'],
      },
      colors: {
        'choco':     '#231416',
        'catawba':   '#753b41',
        'tuscan':    '#784a4a',
        'lilac':     '#b89da2',
        'ribbon':    '#dfb0bb',
        'pearl':     '#e5dcde',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        rebeca: {
          "primary":          "#753b41",
          "primary-content":  "#e5dcde",
          "secondary":        "#784a4a",
          "secondary-content":"#e5dcde",
          "accent":           "#dfb0bb",
          "accent-content":   "#231416",
          "neutral":          "#b89da2",
          "neutral-content":  "#231416",
          "base-100":         "#231416",
          "base-200":         "#2e1a1c",
          "base-300":         "#3a2224",
          "base-content":     "#e5dcde",
          "info":             "#b89da2",
          "success":          "#784a4a",
          "warning":          "#dfb0bb",
          "error":            "#753b41",
        },
      },
    ],
    darkTheme: "rebeca",
  },
}
