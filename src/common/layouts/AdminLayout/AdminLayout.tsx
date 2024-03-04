import React, { FC, ReactNode } from "react";
import { AdminLayoutContext, type AdminLayoutContextType } from "./AdminLayout.context";
import { AdminLayoutSidebar } from "./AdminLayoutSidebar.component";
import { Container, ContentWrapper, Wrapper, WrapperTitle } from "./AdminLayout.styled";

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
          <WrapperTitle variant="h5">{title}</WrapperTitle>
          <ContentWrapper>{children}</ContentWrapper>
        </Wrapper>
      </Container>
    </AdminLayoutContext.Provider>
  );
};
