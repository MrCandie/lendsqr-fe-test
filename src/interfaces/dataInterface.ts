export interface IData {
  _id: string;
  index: number;
  status: string;
  organization: string;
  date: string;
  name: string;
  balance: string;
  tier: number;
  accountNumber: number;
  username: string;
  bankName: string;
  phone: string;
  email: string;
  bvn: number;
  gender: string;
  maritalStatus: string;
  children: number | string;
  typeOfResidence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officialEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
  twitter: string;
  instagram: string;
  facebook: string;
  guarantors: {
    name: string;
    email: string;
    phone: string;
    relationship: string;
  };
}
