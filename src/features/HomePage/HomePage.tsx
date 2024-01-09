import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSnackbar, useTheme } from "@/common/hooks";
import { AboutPagePath } from "@/configs/router/path.router";
import { LoaderFC, withRouterLoader } from "@/common/components/hoc";
import { HomePageContext, HomePageContextType } from "./HomePage.context";
import { Greeting } from "./HomePage.styled";

const Page: LoaderFC<{ a: string }> = () => {
  const { mode, changeTheme } = useTheme();
  const { openSnackbar } = useSnackbar();

  const HomePageContextValue: HomePageContextType = {};

  const handleChangeTheme = () => {
    if (mode === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  const handleOpenSnackbar = () => {
    openSnackbar({ message: "You have a notification", variant: "info" });
  };

  return (
    <HomePageContext.Provider value={HomePageContextValue}>
      <Greeting variant="h1">Hello World</Greeting>
      <Button variant="contained" onClick={handleChangeTheme}>
        Change Theme
      </Button>
      <Button variant="contained" onClick={handleOpenSnackbar}>
        Open Snackbar
      </Button>
      <Link to={AboutPagePath.path}>
        <Button>About</Button>
      </Link>
    </HomePageContext.Provider>
  );
};

export const HomePage = withRouterLoader(Page);
