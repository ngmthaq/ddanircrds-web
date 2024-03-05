import React, { FC, ReactNode } from "react";
import { AdminLayoutContext, type AdminLayoutContextType } from "./AdminLayout.context";
import { AdminLayoutSidebar } from "./AdminLayoutSidebar.component";
import { Container, ContentWrapper, Wrapper, WrapperTitle } from "./AdminLayout.styled";
import { Skeleton } from "@mui/material";

export type AdminLayoutProps = {
  children: ReactNode;
  title: string;
  contentMaxWidth: string;
};

export const AdminLayout: FC<AdminLayoutProps> = ({ children, title, contentMaxWidth }) => {
  const AdminLayoutContextValue: AdminLayoutContextType = {};

  return (
    <AdminLayoutContext.Provider value={AdminLayoutContextValue}>
      <Container id="admin-layout">
        <AdminLayoutSidebar />
        <Wrapper component="section">
          <WrapperTitle variant="h5">
            {title === "Loading" ? (
              <Skeleton variant="rounded" width="240px" height="40px" />
            ) : (
              title
            )}
          </WrapperTitle>
          <ContentWrapper sx={{ maxWidth: contentMaxWidth }}>{children}</ContentWrapper>
        </Wrapper>
      </Container>
    </AdminLayoutContext.Provider>
  );
};
