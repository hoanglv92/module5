import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent  implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  newTitle='';
  newUrl='';

  addArticle() {
    title:this.newTitle;
    url:this.newUrl;
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
