import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({ autoCodeSplitting: true }), viteReact(), vanillaExtractPlugin()],

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
