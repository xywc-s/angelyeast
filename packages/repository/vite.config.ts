import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      outputDir: ['es', 'lib']
    })
  ],
  resolve: {
    alias: {
      '@': 'src'
    }
  },
  build: {
    outDir: 'es',
    minify: false,
    rollupOptions: {
      external: [
        'element-plus',
        'lodash-es',
        '@vueuse/core',
        '@xywc-s/utils',
        'vue',
        '@angelyeast/models',
        '@angelyeast/types',
        '@angelyeast/services'
      ],
      input: 'src/index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          dir: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
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
