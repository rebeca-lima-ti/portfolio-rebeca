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
        'choco':     '#000807',
        'purple':    '#424466',
        'catawba':   '#6a6c97',
        'tuscan':    '#9395D3',
        'lilac':     '#B3B7EE',
        'ribbon':    '#FBF9FF',
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
            "primary":          "#9395D3",
            "primary-content":  "#000807",
            "secondary":        "#B3B7EE",
            "secondary-content":"#000807",
            "accent":           "#6a6c97",
            "accent-content":   "#000807",
            "neutral":          "#FBF9FF",
            "neutral-content":  "#000807",
            "base-100":         "#FBF9FF",
            "base-200":         "#B3B7EE",
            "base-300":         "#9395D3",
            "base-content":     "#e5dcde",
            "info":             "#B3B7EE",
            "success":          "#9395D3",
            "warning":          "#6a6c97",
            "error":            "#000807",
        },
      },
    ],
    darkTheme: "rebeca",
  },
}
