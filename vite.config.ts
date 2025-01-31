import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["/icons/coffee-cup.png"],
      devOptions: {
        enabled: true, // Enable PWA in development mode
        type: "module",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico}"], // Cache all static assets
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.example\.com\/.*/, // Cache API requests
            handler: "NetworkFirst", // Use network-first strategy
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50, // Cache up to 50 requests
                maxAgeSeconds: 60 * 60 * 24, // Cache for 1 day
              },
            },
          },
          {
            urlPattern: /\.(png|jpg|jpeg|svg|ico)$/, // Cache images
            handler: "CacheFirst", // Use cache-first strategy
            options: {
              cacheName: "image-cache",
              expiration: {
                maxEntries: 100, // Cache up to 100 images
                maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for 30 days
              },
            },
          },
          {
            urlPattern: /\/data\/menu\.json/, // Cache your menu.json
            handler: "NetworkFirst", // Use network-first strategy
            options: {
              cacheName: "menu-cache",
              expiration: {
                maxEntries: 1, // Cache only one version
                maxAgeSeconds: 60 * 60 * 24, // Cache for 1 day
              },
            },
          },
        ],
      },
      manifest: {
        name: "Cafe Menu",
        short_name: "CafeMenu",
        description: "Digital menu for cafe restaurant",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/icons/coffee-cup.png",
            sizes: "128x128",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
