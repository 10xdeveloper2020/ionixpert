import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MyMaterialModule } from '../my-material/my-material.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, ModalDialogComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    MyMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FooterComponent, HeaderComponent, ModalDialogComponent, ProjectDetailsComponent]
})
export class SharedModule { }
