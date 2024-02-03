import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { HomePagePath } from "@/configs/router/routes";
import { LoaderFC, withRouterLoader } from "@/common/components/H.O.C";
import { BaseLayout } from "@/common/layouts";
import { AboutPageContext, AboutPageContextType } from "./AboutPage.context";
import { Greeting } from "./AboutPage.styled";

const Page: LoaderFC = () => {
  const AboutPageContextValue: AboutPageContextType = {};

  return (
    <AboutPageContext.Provider value={AboutPageContextValue}>
      <BaseLayout>
        <Greeting variant="h1">Hello World</Greeting>
        <Link to={HomePagePath.path}>
          <Button>Home</Button>
        </Link>
      </BaseLayout>
    </AboutPageContext.Provider>
  );
};

export const AboutPage = withRouterLoader(Page);
