import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/landing-page",
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})
