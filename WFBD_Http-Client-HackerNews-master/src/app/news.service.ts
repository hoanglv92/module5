import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private articles: Article[] = [];

  constructor(private httpClient: HttpClient) {
    this.fetchArticlesFromAPI().subscribe( (newsItems) => {
        this.articles = newsItems;
      }, error => {
        console.log('NewsService.getAllArticlesFromAPI() :: Gặp lỗi khi lấy danh sách bài viết từ HackerNews');
      });
  }

  fetchArticlesFromAPI() {
    return this.httpClient
      .get<Article[]>('http://localhost:8080/api/home');
      // .subscribe( (newsItems) => {
      //   this.articles = newsItems;
      // }, error => {
      //   console.log('NewsService.getAllArticlesFromAPI() :: Gặp lỗi khi lấy danh sách bài viết từ HackerNews');
      // });
  }

  getAllNews() {
    return this.articles;
  }

  searchNewsByTitle(keyword: string): Article[] {
    const foundArticles = this.articles.filter( item => item.title.includes(keyword));
    return foundArticles;
  }
}
