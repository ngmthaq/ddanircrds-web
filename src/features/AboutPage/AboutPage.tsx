import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { HomePagePath } from "@/configs/router/path.router";
import { useTheme } from "@/common/hooks";
import { LoaderFC, withRouterLoader } from "@/common/components/hoc";
import { BaseLayout } from "@/common/components/layouts";
import { AboutPageContext, AboutPageContextType } from "./AboutPage.context";
import { Greeting } from "./AboutPage.styled";

const Page: LoaderFC<{ a: string }> = () => {
  const { mode, changeTheme } = useTheme();

  const handleChangeTheme = () => {
    if (mode === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  const AboutPageContextValue: AboutPageContextType = {};

  return (
    <AboutPageContext.Provider value={AboutPageContextValue}>
      <BaseLayout>
        <Greeting variant="h1">Hello World</Greeting>
        <Button variant="contained" onClick={handleChangeTheme}>
          Change Theme
        </Button>
        <Button>
          <Link to={HomePagePath.path}>Home</Link>
        </Button>
      </BaseLayout>
    </AboutPageContext.Provider>
  );
};

export const AboutPage = withRouterLoader(Page);
