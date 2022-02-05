import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("Should fire setQuery when input changes", () => {
    const mockSetQuery = jest.fn();

    render(<SearchBar setQuery={mockSetQuery} />);

    fireEvent.change(screen.getByTestId("search-bar-input"), {
      target: {
        value: "Some text",
      },
    });

    expect(mockSetQuery).toHaveBeenCalledTimes(1);
  });
});
