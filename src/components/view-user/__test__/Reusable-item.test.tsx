import { render, screen } from "@testing-library/react";
import ReusableItem from "../../view-user/ReusableItem";
import { expect } from "vitest";

describe("App", () => {
  it("Should render the user detail component in the dom correctly", () => {
    render(<ReusableItem title="hello" text="there" />);

    const titleElement = screen.getByTitle("Title");
    expect(titleElement.textContent).toBe("hello");
  });

  it("Should render the user detail component in the dom correctly", () => {
    render(<ReusableItem title="hello" text="there" />);

    const titleElement = screen.getByRole("heading");
    expect(titleElement.textContent).toBe("there");
  });

  // negative
  it("Should render the user detail component in the dom correctly", () => {
    render(<ReusableItem title="hello" text="there" />);

    const titleElement = screen.getByRole("heading");
    expect(titleElement).not.toBeFalsy();
  });
});
