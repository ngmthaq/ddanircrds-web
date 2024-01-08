import { LoaderFunction } from "react-router-dom";

export const AboutPageLoader: LoaderFunction = async (context) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Thang" });
    }, 100);
  });
};
