import { render, screen } from "@testing-library/react";
import PersonalInformation from "../../view-user/PersonalInformation";
import { expect } from "vitest";

describe("App", () => {
  it("Should render the user detail component in the dom correctly", () => {
    render(
      <PersonalInformation
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
      />
    );

    const titleElement = screen.getByTitle("Personal Information");
    expect(titleElement.textContent).toBe("Personal Information");
  });

  // negative
  it("Should render the user detail component in the dom correctly", () => {
    render(
      <PersonalInformation
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
      />
    );

    const titleElement = screen.getByTitle("Personal Information");
    expect(titleElement).not.toBeFalsy();
  });
});
