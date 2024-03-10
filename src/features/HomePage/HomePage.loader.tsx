import { LoaderFunction } from "react-router-dom";
import { AppUtils } from "@/common/utils";
import { AboutUsModel, SocialModel, TopBannerModel } from "@/api/models";
import { AboutUsServices, SocialServices, TopBannerServices } from "@/api/services";

const handleGetBanners = async () => {
  const response = await TopBannerServices.getAll();
  if (response.ok) return response.data;
  else throw new Response(response.message, { status: response.status });
};

const handleGetSocialList = async () => {
  const response = await SocialServices.getAllSocials();
  if (response.ok) return response.data;
  else throw new Response(response.message, { status: response.status });
};

const handleGetAboutUs = async () => {
  const response = await AboutUsServices.getAboutUsContent();
  if (response.ok) return response.data;
  else throw new Response(response.message, { status: response.status });
};

export const useHomePageLoader: LoaderFunction = async (loader) => {
  const banners: TopBannerModel[] = await handleGetBanners();
  const socials: SocialModel[] = await handleGetSocialList();
  const aboutUs: AboutUsModel = await handleGetAboutUs();
  await AppUtils.delay(2);
  return { banners, socials, aboutUs };
};
