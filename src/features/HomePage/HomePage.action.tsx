import { ActionFunction, ShouldRevalidateFunction } from "react-router-dom";

export const useHomePageAction: ActionFunction = async (context) => {
  return {};
};

export const shouldHomePageRevalidate: ShouldRevalidateFunction = (context) => {
  return true;
};
