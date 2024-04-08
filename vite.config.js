import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dirname, resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
	        '@': fileURLToPath(new URL('./src', import.meta.url))
	    }
    },
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                impressum: resolve(__dirname, 'pages/impressum/index.html'),
                datenschutz: resolve(__dirname, 'pages/datenschutz/index.html')
            }
        }
    }
})