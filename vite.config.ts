import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            generateScopedName: '[name]__[local]',
        },
    },
    resolve: {
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@route': path.resolve(__dirname, 'src/route/'),
        },
    },
});
