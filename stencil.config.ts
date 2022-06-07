import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    './src/**/*.tsx',
    './src/**/*.css',
    './src/**/*.html',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

process.env.NODE_ENV = "development";

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
  plugins: [
    postcss({
      plugins: [
        require("postcss-import"),
        require("tailwindcss")("./tailwind.config.js"),
        autoprefixer(),
        ...(process.env.NODE_ENV === "production" ? [purgecss, require("cssnano")] : [])
      ],
    })
  ],
  devServer: {
    reloadStrategy: "hmr"
  }
};
