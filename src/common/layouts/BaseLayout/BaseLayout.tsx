import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import { BaseLayoutContext, type BaseLayoutContextType } from "./BaseLayout.context";

export type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const BaseLayoutContextValue: BaseLayoutContextType = {};

  return (
    <BaseLayoutContext.Provider value={BaseLayoutContextValue}>
      <Box id="base-layout">{children}</Box>
    </BaseLayoutContext.Provider>
  );
};
