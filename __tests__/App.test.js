import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./quote-generator";

test("first", () => {
  const { getbyText } = render(<App />);
  const newQuoteButton = getbyText("New Quote");
  expect(newQuoteButton).toHaveText("New Quote");
});
