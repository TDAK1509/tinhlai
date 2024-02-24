import { defineVitestConfig } from "@nuxt/test-utils/config";
import { resolve } from "path";

const r = (p: string) => resolve(__dirname, p);

const aliases: Record<string, string> = {
  "@": r("."),
  "@/": r("./"),
};

export default defineVitestConfig({
  resolve: { aliases },
});
