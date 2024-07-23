import type { Config } from "tailwindcss";
import tailwindForm from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  darkMode: "selector",
  content: [],
  theme: {
    extend: {},
  },
  plugins: [tailwindForm],
};
