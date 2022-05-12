import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectDetail } from '../../models/project-detail';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  PROJECT_DETAILS: ProjectDetail;

  constructor(private dialogRef: MatDialogRef<ProjectDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) project_details) {
    this.PROJECT_DETAILS = project_details;
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
