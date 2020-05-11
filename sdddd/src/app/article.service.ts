import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "./Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  article: Article []=[];
  constructor(private httpClient: HttpClient) {
    this.fetchArticleFromApi().subscribe((newItem) => {
      this.article=newItem;
    },error => {
      console.log('gap loi'+error);
    });
  }

  fetchArticleFromApi(){
    return this.httpClient
      .get<Article[]>('http://localhost:8080/api/home');
  }

  getAllArticle(){
   return this.article;
  }

  saveArticle(article: Article){
    // @ts-ignore
    this.httpClient.post('http://localhost:8080/api/home',article).subscribe();

  }

  remoreArticle(id: number){
    // @ts-ignore
    this.httpClient.post('http://localhost:8080/api/delete',id).subscribe();

  }

  createArticle(article: Article){
    this.httpClient.put('http://localhost:8080/api/add',article).subscribe();

  }

  searchArticleByTitle(title:string): Article[] {
    const foundArticle=this.article.filter(item => {
      item.title.includes(title);
    })
    return foundArticle;
  };

}

