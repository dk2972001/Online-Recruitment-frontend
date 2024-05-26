export class Company {
  companyId: number;
  companyType: string;
  companyName: string;
  companyDescr: string;
  companyAddress: string;

  constructor(
    companyId: number,
    companyType: string,
    companyName: string,
    companyDescr: string,
    companyAddress: string
  ) {
    this.companyId = companyId;
    this.companyType = companyType;
    this.companyName = companyName;
    this.companyDescr = companyDescr;
    this.companyAddress = companyAddress;
  }

  toString(): string {
    return `Company [companyId=${this.companyId}, companyType=${this.companyType}, companyName=${this.companyName}, companyDescr=${this.companyDescr}, companyAddress=${this.companyAddress}]`;
  }
}
