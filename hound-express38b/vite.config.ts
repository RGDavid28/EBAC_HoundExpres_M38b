import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/EBAC_HoundExpres_M38b/',
//    base: 'https://github.com/RGDavid28/EBAC_HoundExpres_M38b/',
})

