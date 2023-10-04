/* eslint-disable import/no-unused-modules */
import { userEvent } from "@storybook/testing-library";
import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

// https://testing-library.com/docs/example-react-router/
const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export { renderWithRouter };
