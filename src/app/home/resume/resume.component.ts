import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  showDocument(): void {
    // let url = '/assets/Harish_Ale_Resume.pdf';
    // let url = 'https://drive.google.com/file/d/1J12Lwcn_zqEx0ZdxtGiwbDHg50EYfzy-/view?usp=sharing';
    let url = 'https://drive.google.com/uc?id=1J12Lwcn_zqEx0ZdxtGiwbDHg50EYfzy-&export=download';
    
    let link = document.createElement('a');
    link.href = url;
    link.download = 'Harish_Ale_Resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }
}
