import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base:'/myportfolio/',
=======
  base:'/myportfolio',
>>>>>>> d785e75 (Updated design and content)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
