import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  assetsInclude: ['**/*.md'],
  plugins: [react(), tsconfigPaths(), viteCompression()],
});
