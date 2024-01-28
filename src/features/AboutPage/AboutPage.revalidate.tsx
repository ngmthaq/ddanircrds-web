import { ShouldRevalidateFunction } from "react-router-dom";

export const shouldAboutPageRevalidate: ShouldRevalidateFunction = (revalidation) => {
  return true;
};
