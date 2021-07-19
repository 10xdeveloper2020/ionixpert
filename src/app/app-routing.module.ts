import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


@NgModule({
  imports: [RouterModule.forRoot([
    // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '' },
    { path: '**', component: NoPageFoundComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
