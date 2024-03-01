import { ShouldRevalidateFunction } from "react-router-dom";

export const shouldAdminSocialPageRevalidate: ShouldRevalidateFunction = (revalidation) => {
  return true;
};
