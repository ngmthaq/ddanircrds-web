import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@/common/hooks";
import { LoaderFC, withRouterLoader } from "@/common/components/hoc";
import { HomepageContext, HomepageContextType } from "./HomePage.context";
import { Greeting } from "./HomePage.styled";

const Page: LoaderFC<{ a: string }> = ({ loaderData }) => {
  const { mode, changeTheme } = useTheme();

  const HomepageContextValue: HomepageContextType = {};

  const handleChangeTheme = () => {
    if (mode === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  return (
    <HomepageContext.Provider value={HomepageContextValue}>
      <Greeting variant="h1">Hello World</Greeting>
      <Button variant="contained" onClick={handleChangeTheme}>
        Change Theme
      </Button>
    </HomepageContext.Provider>
  );
};

export const HomePage = withRouterLoader(Page);
