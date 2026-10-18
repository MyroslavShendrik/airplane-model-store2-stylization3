import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: 'star-wars-shop', //! <-- ім'я репозиторію
      resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src'),
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
})
