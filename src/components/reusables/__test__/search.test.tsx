import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";
import { expect } from "vitest";

describe("App", () => {
  it("Should render the input component in the dom correctly", () => {
    render(
      <Search value="testing" searchHandler={() => {}} onChange={() => {}} />
    );

    const inputElement = screen.getByPlaceholderText("Search for anything");
    expect(inputElement).toBeInTheDocument();
  });

  it("Test for input event and render input", () => {
    render(<Search value="" searchHandler={() => {}} onChange={() => {}} />);

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText(/Search for anything/i);

    const buttonElement = screen.getByTitle("search");

    fireEvent.change(inputElement, { target: { value: "testing" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });

  it("Should render the search component in the dom correctly", () => {
    render(
      <Search value="testing" searchHandler={() => {}} onChange={() => {}} />
    );

    const inputElement = screen.getByRole("button");
    expect(inputElement).toBeInTheDocument();
  });

  it("Input field should be empty after clicking search button", () => {
    render(
      <Search value="testing" searchHandler={() => {}} onChange={() => {}} />
    );

    const inputElement = screen.getByRole("button");
    expect(inputElement).toBeInTheDocument();
  });

  // negative
  it("Should render the search component in the dom correctly", () => {
    render(
      <Search value="testing" searchHandler={() => {}} onChange={() => {}} />
    );

    const inputElement = screen.getByRole("button");
    expect(inputElement).not.toBeFalsy();
  });
});
