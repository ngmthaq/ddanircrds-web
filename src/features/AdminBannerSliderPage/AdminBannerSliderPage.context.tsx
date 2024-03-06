import { ChangeEventHandler, createContext } from "react";
import { TopBannerModel } from "@/api/models";

export type SelectedBannerType = {
  id: string | null;
  image: File | null;
  preview: string | null;
  element: HTMLInputElement | null;
};

export type AdminBannerSliderPageContextType = {
  banners: TopBannerModel[];
  selectedBanner?: SelectedBannerType;
  handleChangeBanner: ChangeEventHandler<HTMLInputElement>;
  handleCancelUpload: () => void;
  handleUpload: () => void;
};

export const AdminBannerSliderPageContext = createContext<AdminBannerSliderPageContextType>({
  banners: [],
  selectedBanner: undefined,
  handleChangeBanner: () => {},
  handleCancelUpload: () => {},
  handleUpload: () => {},
});
