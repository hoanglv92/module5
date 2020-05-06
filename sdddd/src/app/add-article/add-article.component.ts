import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output() addNew = new EventEmitter();
  newTitle = '';
  newUrl = '';


  addArticle() {
   // @ts-ignore
    let newAR:Article={
     title: this.newTitle,
     url: this.newUrl
   }
    this.addNew.emit(newAR);
    this.newTitle='';
    this.newUrl='';
    alert('success')
  }
}
