import { CracoConfig } from "@craco/types";
import path from "path";

const configs: CracoConfig = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      $: path.resolve(__dirname, "functions/src"),
    },
  },
  devServer: {
    client: {
      overlay: false,
    },
  },
};

export default configs;
