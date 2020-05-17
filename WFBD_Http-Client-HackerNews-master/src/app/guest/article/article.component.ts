import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input("article") myArticle: Article;
  @Output() onClickShowButton = new EventEmitter<string>();

  isShow = false;
  abc: string;

  constructor() { }

  ngOnInit() {
  }

  showContent() {
    this.isShow = !this.isShow;
  }

  goToLink() {
    this.onClickShowButton.emit('Redirect to ' + this.myArticle.url);
  }
}
