import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../article.service";
import {FormGroup} from "@angular/forms";
import {Article} from "../../article";

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles: Article[];
  keyword = "";

  viewArticle: Article;
  arEdit:Article;
  idAr: number;

  constructor(private articleService: ArticleService) {


  }

  getNewsFromAPI() {
    this.articleService.fetchArticlesFromAPI().subscribe( news => {
      this.articles = news;
      console.log('a');

    });
  }

  searchNewsByTitle() {
    console.log(this.keyword);
    if (this.keyword === '') {
      this.articles = this.articleService.getAllNews();
    } else {
      this.articles = this.articleService.searchNewsByTitle(this.keyword);
    }
  }


  ngOnInit(): void {
    this.getNewsFromAPI();
    console.log('a');
  }

  showArticle(article: Article){
    this.viewArticle=article;
    console.log('a');

  }
  reloadList(editFrom: FormGroup){
    this.articleService.saveArticle(editFrom.value);
    this.getNewsFromAPI();
    console.log('a');

  }

  deleteArticle(id){
    this.articleService.remoreArticle(id);
    this.getNewsFromAPI();
    console.log('a');
  }

}
