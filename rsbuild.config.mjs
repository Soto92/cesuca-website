import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [pluginReact()],
  output: {
    distPath: {
      root: "build",
    },
  },
});
