import {defineConfig} from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite"
    }
  },

  env: {
    apiUrl: "http://localhost:8001"
  },
  e2e: {
    baseUrl: "http://localhost:8001"
  }
});
