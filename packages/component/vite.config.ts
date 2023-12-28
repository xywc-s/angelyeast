import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), jsx(), dts()],
  resolve: {
    alias: {
      '@': 'src',
      '~': 'types'
    }
  },
  build: {
    outDir: 'lib',
    minify: false,
    rollupOptions: {
      input: 'src/index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          dir: 'lib',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
      ]
    },
    lib: {
      entry: 'src/index.ts',
      name: 'AgComponents'
    }
  }
})
