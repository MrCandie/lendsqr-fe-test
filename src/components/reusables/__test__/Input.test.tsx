import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../Input";
import { expect } from "vitest";

describe("App", () => {
  it("Should render the input component in the dom correctly", () => {
    render(
      <Input
        id="email"
        value="testing"
        type="text"
        placeholder="email"
        title="email"
        onChange={() => {}}
      />
    );

    const inputElement = screen.getByTitle(/email/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("Test for input event and render input", () => {
    render(
      <Input
        id="email"
        value="testing"
        type="text"
        placeholder="email"
        title="email"
        onChange={() => {}}
      />
    );

    const inputElement: HTMLInputElement = screen.getByPlaceholderText("email");
    fireEvent.change(inputElement, { target: { value: "testing" } });
    expect(inputElement.value).toBe("testing");
  });

  // negative
  it("Should render the input component in the dom correctly", () => {
    render(
      <Input
        id="email"
        value="testing"
        type="text"
        placeholder="email"
        title="email"
        onChange={() => {}}
      />
    );

    const inputElement = screen.getByPlaceholderText("email");
    expect(inputElement).not.toBeFalsy();
  });
});
