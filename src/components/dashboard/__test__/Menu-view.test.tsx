import { render, screen } from "@testing-library/react";
import MenuView from "../users/MenuView";
import { expect } from "vitest";

import { BrowserRouter } from "react-router-dom";

const MockMenu = () => {
  return (
    <BrowserRouter>
      <MenuView
        id=""
        status="active"
        setList={() => {}}
        setShow={() => {}}
        setStatData={() => {}}
      />
    </BrowserRouter>
  );
};

describe("Menu view test", () => {
  it("Should render the filter component in the dom correctly", () => {
    render(<MockMenu />);

    const titleElement = screen.getByTitle("menu-view");
    expect(titleElement).toBeInTheDocument();
  });

  // negative
  it("Should render the filter component in the dom correctly", () => {
    render(<MockMenu />);

    const titleElement = screen.getByTitle("menu-view");
    expect(titleElement).not.toBeFalsy();
  });
});
