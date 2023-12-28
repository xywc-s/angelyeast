import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      outputDir: 'types',
      copyDtsFiles: true
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
      name: 'AngelyeastModels'
    }
  }
})
