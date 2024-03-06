import { render, screen } from "@testing-library/react";
import Button from "../Button";
import { expect } from "vitest";

describe("App", () => {
  it("Should render the button component in the dom correctly", () => {
    render(<Button title="Hello" onClick={() => {}} />);

    const titleElement = screen.getByRole("button");
    expect(titleElement).toBeInTheDocument();
  });

  it("Should render the button component in the dom correctly", () => {
    render(<Button title="Hello" onClick={() => {}} />);

    const titleElement = screen.getByText(/Hello/i);
    expect(titleElement).toBeVisible();
  });

  // negative
  it("Should render the button component in the dom correctly", () => {
    render(<Button title="" onClick={() => {}} />);

    const titleElement = screen.getByRole("button");
    expect(titleElement).not.toBeVisible();
  });
});
