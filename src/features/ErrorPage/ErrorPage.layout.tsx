import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { HomePagePath } from "@/configs/router/routes";
import { BaseLayout } from "@/common/components/layouts";
import { Container, Wrapper } from "./ErrorPage.styled";

type ErrorPageLayoutProps = {
  children: ReactNode;
};

export const ErrorPageLayout: FC<ErrorPageLayoutProps> = ({ children }) => {
  return (
    <BaseLayout>
      <Container>
        <Wrapper>
          {children}
          <Link to={HomePagePath.path}>Back to Home</Link>
        </Wrapper>
      </Container>
    </BaseLayout>
  );
};
