import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.js'),
      }
    }
  }
});
