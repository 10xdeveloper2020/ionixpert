import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ModalDialogComponent } from './shared/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoPageFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalDialogComponent]
})
export class AppModule { }
