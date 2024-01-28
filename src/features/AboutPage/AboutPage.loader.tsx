import { LoaderFunction } from "react-router-dom";

export const useAboutPageLoader: LoaderFunction = async (loader) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Thang" });
    }, 100);
  });
};
