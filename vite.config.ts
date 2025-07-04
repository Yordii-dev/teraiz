import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Esta línea reemplaza process.cwd()
  const env = loadEnv(mode, new URL('.', import.meta.url).pathname)

  return {
    base: env.VITE_BASE_PATH || '/techraiz/',
    plugins: [react()],
  }
})
