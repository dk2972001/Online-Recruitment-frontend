// import { Role } from './Role.model';

// export interface User {
//   userId?: number; // Optional if you're creating a new user (won't have an ID yet)
//   role?: Role; // Assuming you have a Role model/interface defined
//   fullName: string;
//   password: string;
//   confirmPassword?: string; // Optional, as it's usually for validation
//   dob: Date;
//   phoneNumber: string;
//   email: string;
//   address: string;
//   gender: string;
//   nationality: string;
// }

export interface User {
  userName: string;
  address: string;
  email: string;
  phoneNumber: string;
  gender: string;
  nationality: string;
  role: string;
  dob: string;
  password: string;
}
