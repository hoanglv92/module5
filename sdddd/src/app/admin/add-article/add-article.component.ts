import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from "../../Article";
import {ArticleService} from "../../article.service";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) {

  }

  ngOnInit(): void {
  }

  newTitle = '';
  newUrl = '';
  create: boolean = true;

  addArticle() {
    let newAR: Article = {
      title: this.newTitle,
      url: this.newUrl,
    }
    if (confirm('do you want continue?')){
      this.articleService.createArticle(newAR);
      this.newTitle = '';
      this.newUrl = '';
      alert('success');
    }

  }
}
