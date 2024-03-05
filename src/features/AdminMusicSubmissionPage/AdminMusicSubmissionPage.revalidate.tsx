import { ShouldRevalidateFunction } from "react-router-dom";

export const shouldAdminMusicSubmissionPageRevalidate: ShouldRevalidateFunction = (
  revalidation,
) => {
  return true;
};
