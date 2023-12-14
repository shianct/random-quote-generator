import React from "react";
import { render, screen, userEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Quotes from "./Quotes";

// Mock axios for API calls
jest.mock("axios");

describe("Quotes Component", () => {
  test("renders without crashing", () => {
    render(<Quotes />);
    expect(screen.getByTestId("quote-box")).toBeInTheDocument();
  });

  test("changes quote and color on button click", async () => {
    axios.get.mockResolvedValue({
      data: {
        quotes: [
          { quote: "Test Quote 1", author: "Author 1" },
          { quote: "Test Quote 2", author: "Author 2" },
        ],
      },
    });

    render(<Quotes />);
    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Test Quote 2")).toBeInTheDocument();
      // Add more assertions if you have specific logic for color change
    });
  });

  test("handles API data correctly", async () => {
    const mockQuotes = [
      { quote: "Test Quote 1", author: "Author 1" },
      { quote: "Test Quote 2", author: "Author 2" },
    ];

    axios.get.mockResolvedValue({ data: { quotes: mockQuotes } });

    render(<Quotes />);

    await waitFor(() => {
      expect(screen.getByText("Test Quote 1")).toBeInTheDocument();
      // Add more assertions based on your component's behavior
    });
  });
});

// ... other imports and mock setup ...

test("changes quote and color on button click", async () => {
  // Mock API response
  axios.get.mockResolvedValue({
    data: {
      quotes: [
        { quote: "Test Quote 1", author: "Author 1" },
        { quote: "Test Quote 2", author: "Author 2" },
      ],
    },
  });

  render(<Quotes />);
  const button = screen.getByRole("button");

  // Capture the initial color
  const initialColor = button.style.backgroundColor;

  // Click the button
  userEvent.click(button);

  await waitFor(() => {
    // Check if the quote has changed
    //expect(screen.getByText('Test Quote 2')).toBeInTheDocument();

    // Check if the color has changed
    const newColor = button.style.backgroundColor;
    expect(newColor).not.toBe(initialColor);
  });
});
