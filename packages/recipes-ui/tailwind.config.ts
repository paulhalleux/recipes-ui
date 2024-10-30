import type { Config } from "tailwindcss";
import { preset } from "@recipes/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [preset],
};

export default config;
