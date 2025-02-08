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
      includeAssets: [
        "/icons/coffee-cup-256x256.png",
        "/icons/icon144x144.png",
        "/Fonts/Vazirmatn-Regular.ttf",
        "/data/pages.json",
        "/data/pages-light.json",
      ],
      devOptions: {
        enabled: true, // Enable PWA in development mode
        type: "module",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico,ttf,json}"], // Cache all static assets
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
            urlPattern: /\.(woff2|woff|ttf|eot|otf)/, // Local fonts
            handler: "CacheFirst",
            options: {
              cacheName: "font-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
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
          {
            urlPattern: /\/data\/pages(-light)?\.json/,
            handler: "CacheFirst",
            options: {
              cacheName: "pages-cache",
              expiration: {
                maxEntries: 2,
                maxAgeSeconds: 60 * 60 * 24 * 7,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        name: "سفره خانه سنتی کیان",
        short_name: "منو کافه کیان",
        description: "منوی آنلاین سفره خانه سنتی کیان",
        theme_color: "#292524",
        background_color: "#292524",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/icons/icon144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icons/coffee-cup-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
