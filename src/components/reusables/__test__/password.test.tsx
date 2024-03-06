import { render, screen, fireEvent } from "@testing-library/react";
import Password from "../Password";
import { expect } from "vitest";

describe("App", () => {
  it("Should render the password component in the dom correctly", () => {
    render(<Password value="testing" onChange={() => {}} />);

    const passwordElement = screen.getByPlaceholderText(/Password/i);
    expect(passwordElement).toBeInTheDocument();
  });

  it("Test if password input react to events", () => {
    render(<Password value="testing" onChange={() => {}} />);

    const passwordElement: HTMLInputElement =
      screen.getByPlaceholderText(/Password/i);
    fireEvent.change(passwordElement, { target: { value: "testing" } });
    expect(passwordElement.value).toBe("testing");
  });

  // negative
  it("Test if password input react to events", () => {
    render(<Password value="testing" onChange={() => {}} />);

    const passwordElement: HTMLInputElement =
      screen.getByPlaceholderText(/Password/i);
    fireEvent.change(passwordElement, { target: { value: "testing" } });
    expect(passwordElement).not.toBeFalsy();
  });
});
