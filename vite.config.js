import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:9999',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,"")
      }
    }
  }
})
