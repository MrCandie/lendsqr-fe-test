import { render, screen } from "@testing-library/react";
import Filter from "../Filter";
import { expect } from "vitest";

describe("App", () => {
  it("Should render the filter component in the dom correctly", () => {
    render(<Filter type="" setShow={() => {}} setList={() => {}} />);

    const titleElement = screen.getByText(/filter/i);
    expect(titleElement).toBeInTheDocument();
  });
});

describe("App", () => {
  it("Should render the filter component in the dom correctly", () => {
    render(<Filter type="" setShow={() => {}} setList={() => {}} />);

    const titleElement = screen.queryByText(/filtering/i);
    expect(titleElement).not.toBeInTheDocument();
  });
});

describe("App", () => {
  it("Should render the filter component in the dom correctly", () => {
    render(<Filter type="" setShow={() => {}} setList={() => {}} />);

    const titleElement = screen.getByText(/filter/i);
    expect(titleElement).toBeVisible();
  });
});
