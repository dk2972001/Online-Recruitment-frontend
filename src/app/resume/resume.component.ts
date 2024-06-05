import { Component, OnInit } from '@angular/core';
import { JobAvailabilityService, JobAvailability } from '../services/job-availability.service';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  jobAvailabilities: JobAvailability[] = [];

  constructor(private jobAvailabilityService: JobAvailabilityService) { }

  ngOnInit(): void {
    this.jobAvailabilityService.getJobAvailabilities().subscribe(data => {
      this.jobAvailabilities = data;
      console.log(this.jobAvailabilities);
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
