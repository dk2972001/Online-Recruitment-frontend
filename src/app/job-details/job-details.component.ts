import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent implements OnInit {
  jobId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('jobId')!;
  }
}