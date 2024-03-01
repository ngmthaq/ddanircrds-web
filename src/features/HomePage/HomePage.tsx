import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useTheme } from "@/common/hooks";
import { withRouterLoader, type LoaderFC } from "@/common/components/H.O.C";
import { BaseLayout } from "@/common/layouts";
import { AppUtils } from "@/common/utils";
import { AdminLoginPagePath } from "@/configs/router/routes";
import { Greeting } from "@/features/HomePage/HomePage.styled";
import { HomePageContext, HomePageContextType } from "./HomePage.context";

const Page: LoaderFC = () => {
  const { mode, changeTheme } = useTheme();

  const handleChangeTheme = () => {
    if (mode === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  const handleOpenSnackbar = () => {
    AppUtils.openSnackbar({
      message: "You have a notification",
      variant: "info",
    });
  };

  const HomePageContextValue: HomePageContextType = {};

  return (
    <HomePageContext.Provider value={HomePageContextValue}>
      <BaseLayout>
        <Greeting variant="h1">Hello World Firebase</Greeting>
        <Button onClick={handleChangeTheme}>Change Theme</Button>
        <Button onClick={handleOpenSnackbar}>Open Snackbar</Button>
        <Link to={AdminLoginPagePath.path}>
          <Button>Login</Button>
        </Link>
      </BaseLayout>
    </HomePageContext.Provider>
  );
};

export const HomePage = withRouterLoader(Page);
