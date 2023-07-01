import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary fallbackRender={(props) => <h1>Sorry, an error occurred.</h1>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
