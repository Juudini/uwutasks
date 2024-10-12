/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "var(--text)",
        hover: "var(--text-hover)",
        custom: {
          primary: "var(--text-custom)",
          hover: "var(--text-custom-hover)",
        },
      },
      backgroundColor: {
        primary: "var(--background)",
        hover: "var(--bg-hover)",
        custom: {
          primary: "var(--bg-custom)",
          hover: "var(--bg-custom-hover)",
        },
      },
      boxShadowColor: {
        primary: "var(--box-shadow)",
        custom: "var(--box-custom)",
      },
      dropShadow: {
        primary: "0 0 2em var(--drop-shadow)",
        custom: "0 0 2em var(--drop-custom)",
      },
      borderColor: {
        primary: "var(--border)",
        hover: "var(--border-hover)",
        custom: {
          primary: "var(--border-custom)",
          hover: "var(--border-custom-hover)",
        },
      },
      outlineColor: {
        primary: "var(--outline)",
        hover: "var(--outline-hover)",
        custom: {
          primary: "var(--outline-custom)",
          hover: "var(--outline-custom-hover)",
        },
      },
    },
  },
  plugins: [],
};
