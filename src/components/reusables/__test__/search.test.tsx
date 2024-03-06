import { render, screen } from "@testing-library/react";
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

  it("Should render the search component in the dom correctly", () => {
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
