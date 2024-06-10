import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobAvailability } from '../models/job-availability.model';
import { JobAvailabilityService } from '../services/job-availability.service';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';
import { CollegeService } from '../services/college.service';
import { College } from '../models/college.model';
@Component({
  selector: 'app-job-detail-dialog',
  templateUrl: './job-detail-dialog.component.html',
  styleUrls: ['./job-detail-dialog.component.css']
})
export class JobDetailDialogComponent implements OnInit {
  student:Student[]=[];
  college:College[]=[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:JobAvailability ,private jobAvailabilityService: JobAvailabilityService ,private studentserive:StudentService , private collegeservice:CollegeService) {}
  ngOnInit(): void {
    this.getstudent();
    this.getcollege();
  }
getstudent(){
  this.studentserive.getStudent().subscribe(data => {
    this.student = data,
    console.log(this.student);
});
}
  getcollege(): void
  {
    this.collegeservice.getCollege().subscribe(data => {
      this.college = data,
      console.log(this.college);
  });
  }
 
  downloadResume(id: number, filename: string): void {
    this.jobAvailabilityService.downloadResume(id).subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(objectUrl);
    }, error => {
      console.error('Download error:', error);
    });
  }


  viewResume(id: number): void {
    this.jobAvailabilityService.downloadResume(id).subscribe(blob => {
      const objectUrl = URL.createObjectURL(blob);
      window.open(objectUrl, '_blank');
    }, error => {
      console.error('View error:', error);
    });
  }

}
