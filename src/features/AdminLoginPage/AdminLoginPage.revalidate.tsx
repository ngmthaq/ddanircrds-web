import { ShouldRevalidateFunction } from "react-router-dom";

export const shouldAdminLoginPageRevalidate: ShouldRevalidateFunction = (revalidation) => {
  return true;
};
