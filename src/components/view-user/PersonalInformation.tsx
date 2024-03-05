import ReusableItem from "./ReusableItem";

export default function PersonalInformation() {
  return (
    <div className="personal-information">
      <div className="personal-information-inner">
        <h1>Personal Information</h1>
        {/* personal information */}
        <div className="personal-information-wrapper">
          <ReusableItem title="full name" text="Grace Effiom" />
          <ReusableItem title="phone number" text="07060780922" />
          <ReusableItem title="email" text="grace@gmail.com" />
          <ReusableItem title="bvn" text="07060780922" />
          <ReusableItem title="gender" text="female" />
          <ReusableItem title="marital status" text="single" />
          <ReusableItem title="children" text="none" />
          <ReusableItem title="Type of residence" text="Parent’s Apartment" />
        </div>

        <h1>Education and Employment</h1>
        {/* education & employment */}
        <div className="personal-information-wrapper">
          <ReusableItem title="level of education" text="B.Sc" />
          <ReusableItem title="employment status" text="employed" />
          <ReusableItem title="sector of employment" text="fintech" />
          <ReusableItem title="Duration of employment" text="2 years" />
          <ReusableItem title="office email" text="grace@lendsqr.com" />
          <ReusableItem
            title="Monthly income"
            text="₦200,000.00- ₦400,000.00"
          />
          <ReusableItem title="loan repayment" text="40,000" />
        </div>

        <h1>Socials</h1>
        {/* socials */}
        <div className="personal-information-wrapper">
          <ReusableItem title="twitter" text="@grace_effiom" />
          <ReusableItem title="facebook" text="Grace Effiom" />
          <ReusableItem title="instagram" text="@grace_effiom" />
        </div>

        <h1>Guarantor</h1>
        {/* Guarantor */}
        <div className="personal-information-wrapper">
          <ReusableItem title="full name" text="Debby Ogana" />
          <ReusableItem title="phone number" text="07060780922" />
          <ReusableItem title="email" text="debby@gmail.com" />
          <ReusableItem title="relationship" text="sister" />
        </div>
      </div>
    </div>
  );
}
