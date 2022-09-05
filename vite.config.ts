import { defineConfig } from 'vite'
import {VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  build: {
  },
  plugins: [VitePWA({
    strategies: 'injectManifest',
    // srcDir: 'src',
    injectManifest: {
      globPatterns: ['**/*.html', '**/*.js', '**/*.css']
    },
    filename: 'sw.js',
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
      type: 'module'
    }
  })]

})
