import { ShouldRevalidateFunction } from "react-router-dom";

export const shouldAdminAboutUsContentPageRevalidate: ShouldRevalidateFunction = (revalidation) => {
  return true;
};
