import React from "react";
import { AppContext, AppContextType } from "./Context";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./theme/scss/index.scss";

function App() {
  const appContextValue: AppContextType = {};

  return <AppContext.Provider value={appContextValue}></AppContext.Provider>;
}

export default App;
