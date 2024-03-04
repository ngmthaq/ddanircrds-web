import React, { FC, ReactNode } from "react";
import { AdminLayoutContext, type AdminLayoutContextType } from "./AdminLayout.context";
import { Box, Typography } from "@mui/material";
import { AdminLayoutSidebar } from "./AdminLayoutSidebar.component";
import { Container, Wrapper } from "./AdminLayout.styled";

export type AdminLayoutProps = {
  children: ReactNode;
  title: string;
};

export const AdminLayout: FC<AdminLayoutProps> = ({ children, title }) => {
  const AdminLayoutContextValue: AdminLayoutContextType = {};

  return (
    <AdminLayoutContext.Provider value={AdminLayoutContextValue}>
      <Container id="admin-layout">
        <AdminLayoutSidebar />
        <Wrapper component="section">
          <Typography>{title}</Typography>
          <Box>{children}</Box>
        </Wrapper>
      </Container>
    </AdminLayoutContext.Provider>
  );
};
