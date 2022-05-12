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
      name: 'Blockchain ▲ Web 3.0 Stack',
      langs: [
        { name: 'Ethereum', img: 'ethereum.png', class: { 'filter-invert': true }  },
        { name: 'Web3 JS', img: 'web3js.png' },
        { name: 'Solidity', img: 'solidity.png', class: { 'filter-invert': true }  },
        { name: 'Ganache➕Truffle', img: 'ganache.png' },
        { name: 'MetaMask', img: 'metamask.svg' }
      ]
    },
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
        { name: 'Semantic UI', img: 'semantic-ui.svg' },
      ]
    },
    {
      name: 'REST APIs',
      langs: [
        { name: 'Nest JS', img: 'nestjs.png' },
        { name: 'Koa JS', img: 'koajs.png', class: { 'filter-invert': true } },
        { name: 'Express JS', img: 'expressjs.jpg', class: { 'filter-invert': true } },
        { name: 'SLIM PHP Framework', img: 'slimphp.png' },
      ]
    },
    {
      name: 'Testing',
      langs: [
        { name: 'Mocha', img: 'mocha.png' },
      ]
    },
    {
      name: 'Add-ons',
      langs: [
        { name: 'React JS', img: 'react.png' },
        { name: 'Flutter', img: 'flutter.png' },
        { name: 'Node JS', img: 'express_node.png' },
        { name: 'Next JS', img: 'nextjs.svg', class: { 'filter-invert': true }  },
        { name: 'Redis', img: 'redis.png' },
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
