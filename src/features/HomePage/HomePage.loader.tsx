import { LoaderFunction } from "react-router-dom";

export const useHomePageLoader: LoaderFunction = async (context) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Thang" });
    }, 100);
  });
};
