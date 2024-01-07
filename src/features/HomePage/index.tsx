import React, { FC } from "react";
import { HomepageContext, HomepageContextType } from "./HomePage.context";

export const Homepage: FC = () => {
  const HomepageContextValue: HomepageContextType = {};

  return <HomepageContext.Provider value={HomepageContextValue}></HomepageContext.Provider>;
};
