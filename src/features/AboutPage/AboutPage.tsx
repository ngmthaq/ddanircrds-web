import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@/common/hooks";
import { LoaderFC, withRouterLoader } from "@/common/components/hoc";
import { AboutPageContext, AboutPageContextType } from "./AboutPage.context";
import { Greeting } from "./AboutPage.styled";

const Page: LoaderFC<{ a: string }> = ({ loaderData }) => {
  const { mode, changeTheme } = useTheme();

  const AboutPageContextValue: AboutPageContextType = {};

  const handleChangeTheme = () => {
    if (mode === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  console.info(loaderData);

  return (
    <AboutPageContext.Provider value={AboutPageContextValue}>
      <Greeting variant="h1">Hello World</Greeting>
      <Button variant="contained" onClick={handleChangeTheme}>
        Change Theme
      </Button>
    </AboutPageContext.Provider>
  );
};

export const AboutPage = withRouterLoader(Page);
