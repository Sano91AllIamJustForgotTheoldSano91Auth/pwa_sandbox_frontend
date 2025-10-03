// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
// import { VitePWA } from 'vite-plugin-pwa'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueDevTools(),
//     VitePWA({
//       registerType: 'autoUpdate',
//       includeAssets: [
//         'favicon.ico',
//         'apple-touch-icon.png',
//         'apple-touch-icon-152x152.png',
//         'apple-touch-icon-167x167.png',
//       ],
//       manifest: {
//         name: 'PWA Sandbox',
//         short_name: 'Sandbox',
//         description: 'A Vue + Vite PWA sandbox project',
//         theme_color: '#ffffff',
//         background_color: '#ffffff',
//         start_url: '.',
//         display: 'standalone',
//         icons: [
//           {
//             src: 'pwa-192x192.png',
//             sizes: '192x192',
//             type: 'image/png',
//           },
//           {
//             src: 'pwa-256x256.png',
//             sizes: '256x256',
//             type: 'image/png',
//           },
//           {
//             src: 'pwa-384x384.png',
//             sizes: '384x384',
//             type: 'image/png',
//           },
//           {
//             src: 'pwa-512x512.png',
//             sizes: '512x512',
//             type: 'image/png',
//           },
//         ],
//       },
//     }),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
// })

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate', // ensures the SW checks for updates automatically
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'apple-touch-icon-152x152.png',
        'apple-touch-icon-167x167.png',
      ],
      manifest: {
        name: 'HeartReader',
        short_name: 'HeartReader',
        description: 'HeartReader PWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        start_url: '.',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'pwa-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // These two lines make the new SW activate instantly:
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
