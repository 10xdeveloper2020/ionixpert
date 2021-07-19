import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Output('project') project = new EventEmitter();

  expertise = [
    {
      name: 'Bristlecone',
      langs: [
        { name: 'MESOP', img: 'mesop.png' },
        { name: 'MF WeConnect', img: 'mfeconnect.png' },
      ]
    },
    {
      name: 'Fuelfortech',
      langs: [
        { name: 'Epsilon Logistics', img: 'epsilon.png' },
        { name: 'Toonz.in', img: 'toonz.jpg' },
        { name: 'Visitor Management', img: 'vms.png' },
      ]
    },
    {
      name: 'Suven',
      langs: [
        { name: 'Library Management', img: 'library.png' },
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  openProject(i) {
    this.project.emit(i);
  }
}
