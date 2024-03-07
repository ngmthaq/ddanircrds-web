import { ShouldRevalidateFunction } from "react-router-dom";

export const shouldHomePageRevalidate: ShouldRevalidateFunction = (revalidation) => {
  return Boolean(revalidation.formData);
};
