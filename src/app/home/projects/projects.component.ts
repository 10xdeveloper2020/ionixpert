import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ProjectDetailsComponent } from 'src/app/shared/project-details/project-details.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Output('project') project = new EventEmitter();

  companies = [
    {
      name: 'IBM',
      projects: [
        { name: 'SBI Yono', img: 'yono.png', description: 'afaf', langs: [], },
        { name: 'Janssen Carepath', img: 'janssen.svg', description: 'afaf', langs: [], }
      ]
    },
    {
      name: 'Bristlecone',
      projects: [
        {
          name: 'MESOP',
          img: 'mesop.png',
          description: 'An ESOP (Employee stock ownership plan) refers to an employee benefit plan which offers employees anownership interest in the organization',
          langs: ['Angular 5', 'ionic 3', 'Angular Material', 'Third Party Plugins'],
        },
        {
          name: 'MF WeConnect',
          img: 'mfeconnect.png',
          description: `** Employee Payroll (Income Tax Simulation &Declaration, Salary Card, Payslip, Flexi Declaration, Form16, LeaveTravel Allowance Summary).
          ** Time & Attendance Management (Attendance regularization and approval)
          ** Information about emergency contact, Offers, etc.`,
          langs: ['Angular 5', 'ionic 3 Framework', 'Angular Material', 'Third Party Plugins'],
        },
      ]
    },
    {
      name: 'Fuelfortech',
      projects: [
        {
          name: 'Epsilon Logistics',
          img: 'epsilon.png',
          description: `**This app was developed for a logistics company that operates Coastal Shipping
          **Planning of Consignments port and time allocation, Planthe voyage, Strategically placing the consignments, consignors and consignees entities to their respectiveports.
          **Shows the time table of different vessels (ships) depending on the voyages in the given timeline.
          **Worked as a developer and team-lead. Teamsize: 4 members.`,
          langs: ['ionic 3 Framework', 'SLIM PHP Framework', 'SCSS', 'Angular 5', 'TypeScript', 'MySQL'],
        },
        {
          name: 'Toonz.in',
          img: 'toonz.jpg',
          description: `**An E-commerce website for kids' apparel and essentials.
          **Created the admin dashboard features like adding products, offers, placing order from dashboard, menu creator, customer registration, integrating loyalty program API (EasyRewardz), Logistics API (EcomExpress), Order tracking, Sales analytics, and Report generation.
          **Worked as a developer and team-lead. Teamsize: 4members.`,
          langs: ['PHP', 'HTML', 'CSS', 'AngularJS', 'jQuery', 'MySQL'],
        },
        {
          name: 'Visitor Management',
          img: 'vms.png',
          description: `**A full-fledged solution for managing visitors, staff, and members in an organization or society buildings. The system has 6 separate apps for visitor, host, guard, admin, organization, and super admin.
          ** Worked as a developer and team-lead. Teamsize: 3 members.`,
          langs: ['ionic 3 Framework with Native Plugins', 'SLIM PHP Framework', 'SCSS', 'Angular 5', 'TypeScript', 'MySQL'],
        },
      ]
    },
    {
      name: 'Suven/College',
      projects: [
        {
          name: 'Automatic License Plate Recognition (ALPR)',
          img: 'alpr.png',
          description: `**RFID Card should be embedded into License Plate.
          **The RFID reader (sensor) detects the card and stores information into database.
          **On toll roads, this system can allow cars to pass through toll gate without stopping. The bill can then be sent by an email.
          **The system can be used at parking area in Corporate Buildings, Institutions to allow only authorized vehicles or to record the duration, license number of outside vehicles
          **The system can implemented at traffic signal torecordvehicles of law offenders.`,
          langs: ['C#', 'ASP.NET', 'MS SQL', 'Embedded System', 'Arduino'],
          class: { 'filter-invert': true },
        },
        {
          name: 'Library Management',
          img: 'library.png',
          description: 'Inventory of Books, Categories, Search, User Records, Notifications, Admin Dashboard',
          langs: ['Python', 'DJango', 'HTML', 'CSS'],
        },
      ]
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openProject(i) {
    this.project.emit(i);
  }

  showDetails(project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = project;
    // this.dialog.open(ModalDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(ProjectDetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );

  }

}
