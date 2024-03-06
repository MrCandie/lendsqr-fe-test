import { render, screen, fireEvent } from "@testing-library/react";
import Select from "../Select";
import { expect } from "vitest";

describe("App", () => {
  it("Should render the select component in the dom correctly", () => {
    render(
      <Select id="email" value="testing" options={[]} onChange={() => {}} />
    );

    const selectElement = screen.getByTitle(/select/i);
    expect(selectElement).toBeInTheDocument();
  });

  it("Should react to the change event and detect new input", () => {
    render(
      <Select
        id="email"
        value="testing"
        options={["testing"]}
        onChange={() => {}}
      />
    );

    const selectElement: HTMLSelectElement = screen.getByTitle("select");
    fireEvent.change(selectElement, { target: { value: "testing" } });
    expect(selectElement.value).toBe("testing");
  });

  //   // negative
  it("Expecting select component to not be falsy", () => {
    render(
      <Select id="email" value="testing" options={[]} onChange={() => {}} />
    );

    const selectElement = screen.getByTitle(/select/i);
    expect(selectElement).not.toBeFalsy();
  });
});
