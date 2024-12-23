import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // تعریف رنگ‌ها برای لایت مود
        light: {
          primary: "#3B82F6",
          secondary: "#F97316",
          accent: "#10B981",
          background: "#FFFFFF",
          text: "#1F2937",
          border: "#E5E7EB",
        },
        // تعریف رنگ‌ها برای دارک مود
        dark: {
          primary: "#2563EB",
          secondary: "#EA580C",
          accent: "#14B8A6",
          background: "#111827",
          text: "#F9FAFB",
          border: "#374151",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      ...defaultTheme.colors, // اضافه کردن رنگ‌های پیش‌فرض تیلویند
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
