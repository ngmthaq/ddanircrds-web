import React, { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { AxiosError } from "axios";
import { Divider } from "@mui/material";
import { Message, Status } from "./ErrorPage.styled";
import { ErrorPageLayout } from "./ErrorPage.layout";

/**
 * Common Error Page
 *
 * @returns FC
 */
export const ErrorPage: FC = () => {
  const error: any = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorPageLayout>
        <Status variant="h3">{error.status}</Status>
        <Divider />
        <Message variant="subtitle1">
          {error.status === 404
            ? "We couldn't find the page you were looking for"
            : "An error occurred in client, please try again later"}
        </Message>
      </ErrorPageLayout>
    );
  }

  if (error instanceof AxiosError && error.response) {
    return (
      <ErrorPageLayout>
        <Status variant="h3">{error.response.status}</Status>
        <Divider />
        <Message variant="subtitle1">
          {error.response.status === 403
            ? "You do not have permission to access this page"
            : error.response.status === 404
              ? "We couldn't find the content you were looking for in our server"
              : "Server maintenance or an error occurred in our server, please try again later"}
        </Message>
      </ErrorPageLayout>
    );
  }

  if (error instanceof AxiosError && !error.response && error.request) {
    return (
      <ErrorPageLayout>
        <Status variant="h3">{500}</Status>
        <Divider />
        <Message variant="subtitle1">
          Server maintenance or your internet network may have problems, please try again later
        </Message>
      </ErrorPageLayout>
    );
  }

  throw error;
};
