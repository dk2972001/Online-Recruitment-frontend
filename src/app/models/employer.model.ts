export class Employer {
  employerId: number;
  employerName: string;
  employerPost: string;
  employerAddress: string;
  employerMobile: string;
  employerEmail: string;

  constructor(
    employerId: number,
    employerName: string,
    employerPost: string,
    employerAddress: string,
    employerMobile: string,
    employerEmail: string
  ) {
    this.employerId = employerId;
    this.employerName = employerName;
    this.employerPost = employerPost;
    this.employerAddress = employerAddress;
    this.employerMobile = employerMobile;
    this.employerEmail = employerEmail;
  }
}
