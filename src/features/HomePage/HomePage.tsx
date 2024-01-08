import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@/common/hooks";
import { LoaderFC, withRouterLoader } from "@/common/components/hoc";
import { HomePageContext, HomePageContextType } from "./HomePage.context";
import { Greeting } from "./HomePage.styled";

const Page: LoaderFC<{ a: string }> = ({ loaderData }) => {
  const { mode, changeTheme } = useTheme();

  const HomePageContextValue: HomePageContextType = {};

  const handleChangeTheme = () => {
    if (mode === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  console.info(loaderData);

  return (
    <HomePageContext.Provider value={HomePageContextValue}>
      <Greeting variant="h1">Hello World</Greeting>
      <Button variant="contained" onClick={handleChangeTheme}>
        Change Theme
      </Button>
    </HomePageContext.Provider>
  );
};

export const HomePage = withRouterLoader(Page);