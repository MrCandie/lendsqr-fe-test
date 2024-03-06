import { render, screen } from "@testing-library/react";
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
    expect(inputElement).toBeInTheDocument();
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
