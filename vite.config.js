import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  server: {
    historyApiFallback: true
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['@emailjs/browser']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          fontawesome: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome'],
          icons: ['@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons']
        }
      }
    }
  }
})
