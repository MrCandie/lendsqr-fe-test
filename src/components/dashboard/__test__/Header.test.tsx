import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header search="" onSearch={() => {}} setSearch={() => {}} />
    </BrowserRouter>
  );
};

it("Should render the header component in the DOM correctly", () => {
  render(<MockHeader />);

  const headingElement = screen.getByTitle("header");
  expect(headingElement).toBeInTheDocument();
});
