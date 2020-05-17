import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../article";

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() article: Article;

}
