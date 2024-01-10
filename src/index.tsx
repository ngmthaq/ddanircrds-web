import React, { FC, Fragment, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "./common/hooks";
import { NotistackProvider } from "./common/components/providers";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const Root: FC = () => {
  const { theme } = useTheme();

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <NotistackProvider>
          <CssBaseline />
          <App />
        </NotistackProvider>
      </ThemeProvider>
    </Fragment>
  );
};

root.render(
  process.env.NODE_ENV === "development" ? (
    <Root />
  ) : (
    <StrictMode>
      <Root />
    </StrictMode>
  ),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(process.env.NODE_ENV === "development" ? console.info : () => {});
