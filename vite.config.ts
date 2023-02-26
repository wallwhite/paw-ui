import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        cssCodeSplit: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'paw-ui',
            fileName: 'index',
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            input: {
                index: path.resolve(__dirname, 'src/index.ts'),
                theme: path.resolve(__dirname, 'src/styles/theme.scss'),
            },
            output: {
                assetFileNames: (assetInfo) => (assetInfo.name === 'index.css' ? 'paw-ui.css' : assetInfo.name),
            },
        },
    },
    plugins: [react(), dts()],
});
