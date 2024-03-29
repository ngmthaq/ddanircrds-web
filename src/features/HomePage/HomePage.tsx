import React, { useMemo } from "react";
import { withRouterLoader, type LoaderFC } from "@/common/components/H.O.C";
import { BaseLayout } from "@/common/layouts";
import { HomePageContext, type HomePageContextType, type LoaderDataType } from "./HomePage.context";
import { HomePageHeader } from "./HomePageHeader.component";
import { HomePageBanner } from "./HomePageBanner.component";
import { HomePageSocialLinks } from "./HomePageSocialLinks.component";
import { HomePageAboutUs } from "./HomePageAboutUs.component";
import { HomePageFooter } from "./HomePageFooter.component";
import { HomePageForm } from "./HomePageForm.component";

const Page: LoaderFC = ({ loaderData }) => {
  const { banners, socials, aboutUs }: LoaderDataType = useMemo(() => loaderData, [loaderData]);

  const HomePageContextValue: HomePageContextType = {
    banners: banners,
    socials: socials,
    aboutUs: aboutUs,
  };

  return (
    <HomePageContext.Provider value={HomePageContextValue}>
      <BaseLayout>
        <HomePageHeader />
        <HomePageBanner />
        <HomePageSocialLinks />
        <HomePageAboutUs />
        <HomePageForm />
        <HomePageFooter />
      </BaseLayout>
    </HomePageContext.Provider>
  );
};

export const HomePage = withRouterLoader(Page);
