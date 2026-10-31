import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `npm run build` produces ONE self-contained file: website/index.html
// It works by double-clicking it — no server needed.
export default defineConfig({
  base: './',
  plugins: [tailwindcss(), viteSingleFile()],
  build: { outDir: 'website', emptyOutDir: true },
});
