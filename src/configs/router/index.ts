import { createBrowserRouter, defer } from "react-router-dom";
import * as paths from "./path.router";

const routes = Object.values(paths).map((path) => {
  return {
    ...path,
    loader: async (context: any) => {
      const deferLoader = async () => (path.loader ? path.loader(context) : undefined);
      return defer({ data: deferLoader() });
    },
  };
});

const router = createBrowserRouter(routes);

export default router;
