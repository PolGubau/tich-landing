import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },experimental: {
    fonts: [{
        provider: fontProviders.google(),
      name: "Gabarito",
        fallbacks:["Roboto"],
        cssVariable: "--font-sans"
    }]
}
});