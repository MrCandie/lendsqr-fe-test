import { render, screen } from "@testing-library/react";
import Card from "../Card";
import { expect } from "vitest";

describe("App", () => {
  it("Should render the correct amount of data", () => {
    render(<Card src="" title={50000} text="total users" />);

    const cardElement = screen.getByText(/total users/i);
    expect(cardElement).toBeInTheDocument();
  });

  // negative
  it("Should render the correct amount of data", () => {
    render(<Card src="" title={50000} text="total users" />);

    const cardElement = screen.getByText(/total users/i);
    expect(cardElement).not.toBeFalsy();
  });
});
