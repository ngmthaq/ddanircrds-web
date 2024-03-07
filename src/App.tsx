import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./configs/router";
import { AppLoading } from "./common/components/Generics";
import { useHandleSnackbar } from "./common/providers/NotistackProvider";
import { AppContext, AppContextType } from "./AppContext";

function App() {
  useHandleSnackbar();

  const AppContextValue: AppContextType = {};

  return (
    <AppContext.Provider value={AppContextValue}>
      <AppLoading />
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
