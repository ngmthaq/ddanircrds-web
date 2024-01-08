import React, { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Container, Message, Status, Wrapper } from "./ErrorPage.styled";
import { Divider } from "@mui/material";

export const ErrorPage: FC = () => {
  const error: any = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
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
    );
  }

  throw error;
};
