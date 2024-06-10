// export class Job {
//   jobID: string;
//   jobName: string;
//   salary: string;
//   jobType: string;
//   applyLink: string;
//   jobDescription: string;
//   jobVaccancy: string;

//   constructor(
//     jobID: string,
//     jobName: string,
//     salary: string,
//     jobType: string,
//     applyLink: string,
//     jobDescription: string,
//     jobVaccancy: string=''
//   ) {
//     this.jobID = jobID;
//     this.jobName = jobName;
//     this.salary = salary;
//     this.jobType = jobType;
//     this.applyLink=applyLink;
//     this.jobDescription = jobDescription;
//     this.jobVaccancy = jobVaccancy;
//   }
// }


export class Job {
  constructor(
    public jobID: number,
    public jobName: string,
    public salary: string,
    public jobType: string,
    public jobDescription: string,
    public jobVaccancy: string
  ) {}
}
