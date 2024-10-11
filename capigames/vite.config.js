import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite el acceso desde cualquier IP
    port: 5173, // El puerto que estás usando
  },
})
