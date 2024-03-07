import React from "react";
import { withRouterLoader, type LoaderFC } from "@/common/components/H.O.C";
import { BaseLayout } from "@/common/layouts";
import { HomePageContext, HomePageContextType } from "./HomePage.context";
import { HomePageHeader } from "./HomePageHeader.component";

const Page: LoaderFC = () => {
  const HomePageContextValue: HomePageContextType = {};

  return (
    <HomePageContext.Provider value={HomePageContextValue}>
      <BaseLayout>
        <HomePageHeader />
      </BaseLayout>
    </HomePageContext.Provider>
  );
};

export const HomePage = withRouterLoader(Page);
