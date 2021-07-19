import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './cover/cover.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { MyMaterialModule } from '../my-material/my-material.module';



@NgModule({
  declarations: [CoverComponent, ProjectsComponent, ExpertiseComponent],
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  exports: [CoverComponent, ProjectsComponent, ExpertiseComponent]
})
export class HomeModule { }
