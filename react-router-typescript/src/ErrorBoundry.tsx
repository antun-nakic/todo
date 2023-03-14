import React from "react";
import ErrorPage from "./ErrorPage";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

type Props = {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

function ErrorBoundary({ children }: Props) {
  const error = useRouteError();
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  if (error) {
    return <ErrorPage errorMessage={errorMessage} />;
  }
  return <>{children}</>;
}

export default ErrorBoundary;
