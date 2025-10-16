import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vite.dev/config/
export default defineConfig({
  base: '/vite-user-agent/',
  plugins: [
    basicSsl()
  ]
});