import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ArticleService} from "../../article.service";
import {Article} from "../../Article";

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  Articles: Article[] =[];

  constructor(private articleService: ArticleService) {
    this.getListFromApi();
  }
  urlNew: string;
  titleNew: string;

  ngOnInit(): void {
  }
  getListFromApi(){
    this.articleService.fetchArticleFromApi().subscribe(item =>{
      this.Articles= item;
    });
  }

  reloadList(editFrom: FormGroup){
    this.articleService.saveArticle(editFrom.value);
    this.getListFromApi();
  }

  deleteArticle(id: number){
    if (confirm('do you want continue?')) {
      this.articleService.remoreArticle(id);
      this.getListFromApi();
      // const index =this.Articles.findIndex(e => e.id === id);
      // this.Articles.splice(index,1);
    }
  }

  showArticle(id: number, title: string, url: string){
    this.titleNew = title;
    this.urlNew = url;
  }
}
