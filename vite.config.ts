import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(),  tsconfigPaths()],
  base:'https://AlbogachievM.github.io/yakavkaz/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
