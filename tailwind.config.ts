import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-100":"#e74d9f",
        "primary-200":"#ea8290",
        "primary-300":"##8e2340",
        "accent-100":"#89ecb9",
        "accent-200":"#0cbd7e",
        "text-100":"#fdf3f3",
        "text-200":"#fce7e9",
        "bg-100":"#121212",
        "bg-200":"#b91d5c",
        "bg-300":"#470a20",
      }
    },
  },
  
  plugins: [],
};
export default config;
