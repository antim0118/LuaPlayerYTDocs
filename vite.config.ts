import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    {
      enforce: 'pre', ...mdx({
        providerImportSource: '@mdx-js/react'
      }) },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
  },
})
