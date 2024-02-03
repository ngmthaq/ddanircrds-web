import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { AboutPagePath } from "@/configs/router/routes";
import { useSnackbar, useTheme } from "@/common/hooks";
import { LoaderFC, withRouterLoader } from "@/common/components/H.O.C";
import { BaseLayout } from "@/common/components/layouts";
import { HomePageContext, HomePageContextType } from "./HomePage.context";
import { Greeting } from "./HomePage.styled";

const Page: LoaderFC = () => {
  const { mode, changeTheme } = useTheme();
  const { openSnackbar } = useSnackbar();

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

  const HomePageContextValue: HomePageContextType = {};

  return (
    <HomePageContext.Provider value={HomePageContextValue}>
      <BaseLayout>
        <Greeting variant="h1">Hello World</Greeting>
        <Button onClick={handleChangeTheme}>Change Theme</Button>
        <Button onClick={handleOpenSnackbar}>Open Snackbar</Button>
        <Link to={AboutPagePath.path}>
          <Button>About</Button>
        </Link>
      </BaseLayout>
    </HomePageContext.Provider>
  );
};

export const HomePage = withRouterLoader(Page);
