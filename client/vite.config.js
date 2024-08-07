import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_BASE_URL_PROD': JSON.stringify(env.REACT_APP_BASE_URL_PROD),
      'process.env.REACT_APP_BASE_URL_DEV': JSON.stringify(env.REACT_APP_BASE_URL_DEV),
    },
    plugins: [react()],
  }
})