import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import Unocss from "unocss/vite";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
      dts: "src/components.d.ts",
    }),
    AutoImport({
      imports: ["vue"],
      resolvers: [
        ElementPlusResolver(),
        // IconsResolver({
        //   prefix: "Icon",
        // }),
      ],

      dts: "src/auto-imports.d.ts",
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetRemToPx(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      rules: [
        [/^m-?(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
        [/^mt-?(\d+)$/, ([, d]) => ({ "margin-top": `${d}px` })],
        [/^ml-?(\d+)$/, ([, d]) => ({ "margin-left": `${d}px` })],
        [/^mr-?(\d+)$/, ([, d]) => ({ "margin-right": `${d}px` })],
        [/^mb-?(\d+)$/, ([, d]) => ({ "margin-bottom": `${d}px` })],
        [/^p-?(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
        [/^pt-?(\d+)$/, ([, d]) => ({ "padding-top": `${d}px` })],
        [/^pl-?(\d+)$/, ([, d]) => ({ "padding-left": `${d}px` })],
        [/^pr-?(\d+)$/, ([, d]) => ({ "padding-right": `${d}px` })],
        [/^pb-?(\d+)$/, ([, d]) => ({ "padding-bottom": `${d}px` })],

        [/^f-?(\d+)$/, ([, d]) => ({ "font-size": `${d}px` })],

        [
          /^tc-?(\d+)$/,
          ([, d]) => ({
            color: `
            ${
              d == "1"
                ? "#303133"
                : d == "2"
                ? "#606266"
                : d == "3"
                ? "#909399"
                : "#C0C4CC"
            }
            `,
          }),
        ],
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/element/index.scss" as *;`,
      },
    },
  },
});
