import fs from 'node:fs';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/**
 * GitHub Pages only serves static files, so every client-side route needs a
 * real entry document. Mirror index.html into each route directory and into
 * 404.html (the SPA fallback) once the bundle has been written.
 */
const SPA_ROUTES = ['pageforipad', 'nika'];

function githubPagesRoutes() {
  let outDir = 'dist';

  return {
    name: 'github-pages-routes',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const source = path.join(outDir, 'index.html');
      if (!fs.existsSync(source)) return;

      const html = fs.readFileSync(source, 'utf8');

      for (const route of SPA_ROUTES) {
        const nested = path.join(outDir, route);
        fs.mkdirSync(nested, { recursive: true });
        fs.writeFileSync(path.join(nested, 'index.html'), html);
      }

      fs.writeFileSync(path.join(outDir, '404.html'), html);
      // Keep GitHub Pages from running Jekyll over the hashed asset names.
      fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesRoutes()],
});
