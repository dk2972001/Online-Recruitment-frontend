export class Job {
  jobID: number;
  jobName: string;
  salary: string;
  jobType: string;
  jobDescription: string;
  jobVaccancy: string;

  constructor(
    jobID: number,
    jobName: string,
    salary: string,
    jobType: string,
    jobDescription: string,
    jobVaccancy: string
  ) {
    this.jobID = jobID;
    this.jobName = jobName;
    this.salary = salary;
    this.jobType = jobType;
    this.jobDescription = jobDescription;
    this.jobVaccancy = jobVaccancy;
  }
}
