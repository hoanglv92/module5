import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "./article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article [] = [];

  constructor(private httpClient: HttpClient) {
    this.fetchArticlesFromAPI().subscribe( (newsItems) => {
      this.articles = newsItems;
    }, error => {
      console.log('NewsService.getAllArticlesFromAPI() :: Gặp lỗi khi lấy danh sách bài viết từ HackerNews');
    });
  }

  fetchArticlesFromAPI() {
    console.log('b');
    return this.httpClient
      .get<Article[]>('http://localhost:8080/api/home');
  }

  getAllNews() {
    console.log('b');
    return this.articles;
  }

  searchNewsByTitle(keyword: string): Article[] {
    const foundArticles = this.articles.filter( item => item.title.includes(keyword));
    return foundArticles;
  }
  saveArticle(article: Article){
    // @ts-ignore
    this.httpClient.post('http://localhost:8080/api/home',article).subscribe();
  }

  remoreArticle(id: number){
    // @ts-ignore
    this.httpClient.post('http://localhost:8080/api/delete',id).subscribe();
  }

}
