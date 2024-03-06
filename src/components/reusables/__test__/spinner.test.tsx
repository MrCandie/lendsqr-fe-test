import { render, screen } from "@testing-library/react";
import ReusableSpinner from "../ReusableSpinner";
import { expect } from "vitest";

describe("App", () => {
  it("Should render the button component in the dom correctly", () => {
    render(<ReusableSpinner title="Hello" />);

    const spinnerElement = screen.getByTitle("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("Should render the button component in the dom correctly", () => {
    render(<ReusableSpinner title="Hello" />);

    const spinnerElement = screen.getByTitle("spinner-label");
    expect(spinnerElement.textContent).toBe("Hello");
  });

  // negative
  it("Should render the button component in the dom correctly", () => {
    render(<ReusableSpinner title="Hello" />);

    const spinnerElement = screen.getByTitle("spinner");
    expect(spinnerElement).not.toBeFalsy();
  });
});
