import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";

export type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <Box id="base-layout">{children}</Box>;
};
