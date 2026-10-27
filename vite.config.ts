import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore Local development can stream the original films without copying them.
import localMedia from './scripts/local-media-plugin.mjs'
export default defineConfig({plugins:[react(),tailwindcss(),localMedia()],server:{port:5173,strictPort:true},preview:{port:4173,strictPort:true},build:{chunkSizeWarningLimit:900}})
