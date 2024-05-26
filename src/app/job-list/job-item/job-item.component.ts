import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css',
})
export class JobItemComponent {
  @Input() jobId: string = '';
  @Input() jobName: string = '';
  @Input() salary: string = '';
  @Input() jobType: string = '';
  @Input() jobDescription: string = '';
  @Input() jobVaccancy: string = '';
  @Input() applyLink: string = '';
  @Input() enableApply:boolean = false;
}
