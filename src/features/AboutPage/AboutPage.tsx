import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useTheme } from "@/common/hooks";
import { HomePagePath } from "@/configs/router/path.router";
import { LoaderFC, withRouterLoader } from "@/common/components/hoc";
import { AboutPageContext, AboutPageContextType } from "./AboutPage.context";
import { Greeting } from "./AboutPage.styled";

const Page: LoaderFC<{ a: string }> = () => {
  const { mode, changeTheme } = useTheme();

  const AboutPageContextValue: AboutPageContextType = {};

  const handleChangeTheme = () => {
    if (mode === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  return (
    <AboutPageContext.Provider value={AboutPageContextValue}>
      <Greeting variant="h1">Hello World</Greeting>
      <Button variant="contained" onClick={handleChangeTheme}>
        Change Theme
      </Button>
      <Button>
        <Link to={HomePagePath.path}>Home</Link>
      </Button>
    </AboutPageContext.Provider>
  );
};

export const AboutPage = withRouterLoader(Page);
