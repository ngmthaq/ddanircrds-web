import React, { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Divider } from "@mui/material";
import { BaseLayout } from "@/common/components/layouts";
import { Container, Message, Status, Wrapper } from "./ErrorPage.styled";

export const ErrorPage: FC = () => {
  const error: any = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <BaseLayout>
        <Container>
          <Wrapper>
            <Status variant="h3">{error.status}</Status>
            <Divider />
            <Message variant="subtitle1">
              {error.status === 403
                ? "You do not have permission to access this page"
                : error.status === 404
                  ? "We couldn't find the page you were looking for"
                  : "Server maintenance or an error occurred, please try again later"}
            </Message>
          </Wrapper>
        </Container>
      </BaseLayout>
    );
  }

  throw error;
};
