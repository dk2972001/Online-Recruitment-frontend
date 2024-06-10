import { Student } from "./student.model";

export interface JobAvailability {
    id: number;
    name: string;
    email: string;
    phoneno: string;
    yearofpassing: string;
    percentage: number;
    language: string;
    skills: string;
    project: string;
    resumeData: Blob;
    resumeFilename: string;
    resumeFileType: string;
    user: any; // Modify according to the User structure
    // student:Student;
  }