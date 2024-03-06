import { render, screen } from "@testing-library/react";
import ViewUser from "../../view-user/ViewUser";
import { expect } from "vitest";

import { BrowserRouter } from "react-router-dom";

const MockUserDetail = () => {
  return (
    <BrowserRouter>
      <ViewUser />
    </BrowserRouter>
  );
};

describe("App", () => {
  it("Should render the user detail component in the dom correctly", () => {
    render(<MockUserDetail />);

    const titleElement = screen.getByTitle("view-heading");
    expect(titleElement.textContent).toBe("User Details");
  });

  it("Should render button correctly", () => {
    render(<MockUserDetail />);

    const titleElement = screen.getByTitle("blacklisted");
    expect(titleElement).toBeInTheDocument();
  });

  it("Should render view user correctly", () => {
    render(<MockUserDetail />);

    const titleElement = screen.getByTitle("view user");
    expect(titleElement).toBeInTheDocument();
  });

  // negative
  it("Should render view user correctly", () => {
    render(<MockUserDetail />);

    const titleElement = screen.getByTitle("view user");
    expect(titleElement).not.toBeFalsy();
  });
});
