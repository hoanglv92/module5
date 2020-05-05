import {Component, OnInit} from '@angular/core';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  iShowFrom:boolean=false;
constructor() {
}
ngOnInit() {
}
  hiddenFrom() {
    this.iShowFrom=false;
  }
  newTitle='';
  newUrl='';
  addArticle(){
    this.articles.unshift({
      title:this.newTitle,
      url:this.newUrl
    });
    this.newTitle='';
    this.newUrl='';
  }

  showFrom() {
    this.iShowFrom=true;
  }

  articles=[
    {
    title:'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    }
    ,
    {
      title:'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    }
    ]

}
