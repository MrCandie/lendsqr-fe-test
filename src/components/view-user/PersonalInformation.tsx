// import { IData } from "../../interfaces/dataInterface";
import ReusableItem from "./ReusableItem";

export default function PersonalInformation({ user }: any) {
  const balance = String(user?.loanRepayment)?.split("").slice(1).join("");
  return (
    <div className="personal-information">
      <div className="personal-information-inner">
        <h1>Personal Information</h1>
        {/* personal information */}
        <div className="personal-information-wrapper">
          <ReusableItem title="full name" text={user?.name} />
          <ReusableItem title="phone number" text={user?.phone} />
          <ReusableItem title="email" text={user?.email} />
          <ReusableItem title="bvn" text={user?.bvn} />
          <ReusableItem title="gender" text={user?.gender} />
          <ReusableItem title="marital status" text={user?.maritalStatus} />
          <ReusableItem title="children" text={user?.children} />
          <ReusableItem
            title="Type of residence"
            text={user?.typeOfResidence}
          />
        </div>

        <h1>Education and Employment</h1>
        {/* education & employment */}
        <div className="personal-information-wrapper">
          <ReusableItem
            title="level of education"
            text={user?.levelOfEducation}
          />
          <ReusableItem
            title="employment status"
            text={user?.employmentStatus}
          />
          <ReusableItem
            title="sector of employment"
            text={user?.sectorOfEmployment}
          />
          <ReusableItem
            title="Duration of employment"
            text={user?.durationOfEmployment}
          />
          <ReusableItem title="official email" text={user?.officialEmail} />
          <ReusableItem title="Monthly income" text={user?.monthlyIncome} />
          <ReusableItem title="loan repayment" text={`₦${balance}`} />
        </div>

        <h1>Socials</h1>
        {/* socials */}
        <div className="personal-information-wrapper">
          <ReusableItem title="twitter" text={`@${user?.twitter}`} />
          <ReusableItem title="facebook" text={user?.facebook} />
          <ReusableItem title="instagram" text={`@${user?.instagram}`} />
        </div>

        <h1>Guarantor</h1>
        {/* Guarantor */}
        <div className="personal-information-wrapper">
          <ReusableItem title="full name" text={user?.guarantors?.name} />
          <ReusableItem title="phone number" text={user?.guarantors?.phone} />
          <ReusableItem title="email" text={user?.guarantors?.email} />
          <ReusableItem
            title="relationship"
            text={user?.guarantors?.relationship}
          />
        </div>
      </div>
    </div>
  );
}
