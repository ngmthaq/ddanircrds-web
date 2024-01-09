import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./configs/router";
import { useHandleSnackbar } from "./common/hooks";
import { AppContext, AppContextType } from "./Context";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./theme/scss/index.scss";

function App() {
  useHandleSnackbar();

  const appContextValue: AppContextType = {};

  return (
    <AppContext.Provider value={appContextValue}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
