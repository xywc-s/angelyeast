import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      outputDir: 'types'
    })
  ],
  resolve: {
    alias: {
      '@': 'src'
    }
  },
  build: {
    outDir: 'lib',
    minify: false,
    rollupOptions: {
      external: [
        'axios',
        'element-plus',
        'lodash-es',
        '@vueuse/core',
        '@xywc-s/utils',
        'vue',
        '@angelyeast/model',
        '@angelyeast/types'
      ],
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
      name: 'AngelyeastRepository'
    }
  }
})
