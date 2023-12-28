import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
// import pkg from './package.json'

// pkg.peerDependencies

export default defineConfig({
  plugins: [dts()],
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
        '@angelyeast/service',
        '@angelyeast/model',
        '@angelyeast/repository',
        '@angelyeast/component',
        'element-plus',
        'lodash-es',
        'axios',
        'vue',
        '@vueuse/core'
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
      name: 'Angelyeast'
    }
  }
})
