import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routesNav = [
    {name: 'Home', url: '', submenu:[]},
    {
      name: 'Pages',
      url: 'pages',
      submenu: [
        {name: 'Dashboard', url: 'dashboard'},
        {name: 'Products', url: 'products'},
        {name: 'About', url: 'about'}
      ]
    },
    {
      name: 'Index',
      url: null,
      submenu: [
        {name: 'Login', url: 'login'},
        {name: 'Signup', url: 'signup'},
        {name: 'Forgot Password', url: 'forgot'}
      ]
    }
  ]
}
