import { ShouldRevalidateFunction } from "react-router-dom";

export const shouldAdminBannerSliderPageRevalidate: ShouldRevalidateFunction = (revalidation) => {
  return true;
};
