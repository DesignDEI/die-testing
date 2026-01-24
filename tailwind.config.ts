import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
      },

      fontFamily: {
        sans: ["var(--font-euclid)", "system-ui", "sans-serif"],
      },

      fontSize: {
        h1: ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["2.5rem", { lineHeight: "1.15", fontWeight: "600" }],
        h3: ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
        h4: ["1.5rem", { lineHeight: "1.25", fontWeight: "600" }],
        h5: ["1.25rem", { lineHeight: "1.3", fontWeight: "500" }],
        h6: ["1rem", { lineHeight: "1.4", fontWeight: "500" }],

        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.4", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

export default config;
