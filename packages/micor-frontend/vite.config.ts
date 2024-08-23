import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      copyDtsFiles: true,
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
        '@vueuse/core',
        'vue',
        'vue-router',
        '@angelyeast/model',
        '@angelyeast/types',
        '@angelyeast/repository',
        '@angelyeast/service'
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
      name: 'AngelyeastMicroFrontend'
    }
  }
})
