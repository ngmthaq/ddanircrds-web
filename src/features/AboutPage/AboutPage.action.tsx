import { ActionFunction, ShouldRevalidateFunction } from "react-router-dom";

export const useAboutPageAction: ActionFunction = async (ctx) => {
  return {};
};

export const shouldAboutPageRevalidate: ShouldRevalidateFunction = () => {
  return true;
};
