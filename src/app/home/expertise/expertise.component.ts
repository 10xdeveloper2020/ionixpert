import { Component, OnInit } from '@angular/core';
import { SharedVarService } from 'src/app/services/shared-var.service';

const imgUrl = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})

export class ExpertiseComponent implements OnInit {
  expertise = [
    {
      name: 'Currently Working',
      langs: [
        { name: 'Ionic 5', img: 'ionic.png' },
        { name: 'Angular 9', img: 'angular.png' },
        { name: 'Typescript', img: 'typescript.png' },
        { name: 'HTML 5', img: 'html.png' },
        { name: 'SCSS', img: 'scss.png' },
        { name: 'Javascript', img: 'js.png' },
      ]
    },
    {
      name: 'Component Framework',
      langs: [
        { name: 'Angular Material', img: 'material.png' },
        { name: 'Bootstrap', img: 'bootstrap.png' },
      ]
    },
    {
      name: 'Restful APIs',
      langs: [
        { name: 'Nest JS', img: 'nestjs.png' },
        { name: 'Koa JS', img: 'koajs.png', class: { 'filter-invert': true } },
        { name: 'Express JS', img: 'expressjs.jpg', class: { 'filter-invert': true } },
        { name: 'SLIM PHP Framework', img: 'slimphp.png' },
      ]
    },
    {
      name: 'Apprentice',
      langs: [
        { name: 'React', img: 'react.png' },
        { name: 'Node JS', img: 'express_node.png' },
        { name: 'Deno JS', img: 'denojs.png', class: { 'filter-invert': true } },
      ]
    },
    {
      name: 'Database',
      langs: [
        { name: 'ORACLE SQL', img: 'oracle.png' },
        { name: 'MySQL', img: 'mysql.png' },
        { name: 'MongoDB', img: 'mongo.png' },
      ]
    },
    {
      name: 'Known Language',
      langs: [
        { name: 'jQuery', img: 'jquery.png' },
        { name: 'Python', img: 'python.png' },
        { name: 'PHP', img: 'php.png' },
      ]
    },
  ]
  constructor(public sharedVarService: SharedVarService) { }

  ngOnInit() {
  }

  toggleLang(lang){
    this.vibrate();
    this.sharedVarService.toggleLangToCart(lang);
  }

  vibrate(){
    navigator.vibrate(100);
  }

}
