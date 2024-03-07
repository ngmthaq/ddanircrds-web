import { createContext } from "react";
import { AboutUsModel, SocialModel, TopBannerModel } from "@/api/models";

export type LoaderDataType = {
  banners: TopBannerModel[];
  socials: SocialModel[];
  aboutUs: AboutUsModel;
};

export type HomePageContextType = {
  banners: TopBannerModel[];
  socials: SocialModel[];
  aboutUs: AboutUsModel;
};

export const HomePageContext = createContext<HomePageContextType>({
  banners: [],
  socials: [],
  aboutUs: new AboutUsModel("", ""),
});
