import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Mode, plugin } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.md'],
  plugins: [react(), tsconfigPaths()],
});
