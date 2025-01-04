/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#090f3f",
        },
        cyan: {
          300: "#36DDE8",
        },
      },
    },
  },
  plugins: [],
};
