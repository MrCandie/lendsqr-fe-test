import { render, screen } from "@testing-library/react";
import UserItem from "../users/UserItem";
import { expect } from "vitest";

import { BrowserRouter } from "react-router-dom";

const MockUserItem = () => {
  return (
    <BrowserRouter>
      <UserItem
        user={{
          _id: "",
          index: 0,
          status: "",
          organization: "",
          date: "",
          name: "",
          balance: "",
          tier: 3,
          accountNumber: 9912345678,
          username: "",
          bankName: "",
          phone: "",
          email: "",
          bvn: 7060780922,
          gender: "",
          maritalStatus: "",
          children: "",
          typeOfResidence: "",
          levelOfEducation: "",
          employmentStatus: "",
          sectorOfEmployment: "",
          durationOfEmployment: "",
          officialEmail: "",
          monthlyIncome: "",
          loanRepayment: "",
          twitter: "",
          facebook: "",
          instagram: "",
          guarantors: {
            name: "",
            email: "",
            phone: "",
            relationship: "",
          },
        }}
        i={1}
        setStatData={() => {}}
        setList={() => {}}
      />
    </BrowserRouter>
  );
};

describe("App", () => {
  it("Should render the filter component in the dom correctly", () => {
    render(<MockUserItem />);

    const titleElement = screen.getByTitle("user-item");
    expect(titleElement).toBeInTheDocument();
  });

  // negative
  it("Should render the filter component in the dom correctly", () => {
    render(<MockUserItem />);

    const titleElement = screen.getByTitle("user-item");
    expect(titleElement).not.toBeFalsy();
  });
});
