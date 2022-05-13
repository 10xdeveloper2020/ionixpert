import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './cover/cover.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { MyMaterialModule } from '../my-material/my-material.module';
import { ResumeComponent } from './resume/resume.component';



@NgModule({
  declarations: [CoverComponent, ProjectsComponent, ExpertiseComponent, ResumeComponent],
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  exports: [CoverComponent, ProjectsComponent, ExpertiseComponent,ResumeComponent]
})
export class HomeModule { }
