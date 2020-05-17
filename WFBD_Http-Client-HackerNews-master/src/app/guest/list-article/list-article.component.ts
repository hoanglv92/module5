import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../news.service";

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles: Article[];
  message: string;
  isLoading = false;
  loadingMessage = "Đang chờ...";
  keyword = "";

  constructor(private newsService: NewsService) {
    this.getNewsFromAPI();
  }

  getNewsFromAPI() {
    this.newsService.fetchArticlesFromAPI().subscribe( news => {
      this.articles = news;
    });
  }

  searchNewsByTitle() {
    console.log(this.keyword);
    if (this.keyword === '') {
      this.articles = this.newsService.getAllNews();
    } else {
      this.articles = this.newsService.searchNewsByTitle(this.keyword);
    }
  }

  // getNewsFromAPI() {
  //   this.isLoading = true;
  //   let interval = setInterval(() => {
  //     this.loadingMessage += '.';
  //   }, 500);
  //   this.httpClient
  //     .get<Article[]>('http://localhost:8000/news')
  //     .subscribe( (newsItems) => {
  //     this.articles = newsItems;
  //       this.isLoading = false;
  //       clearInterval(interval);
  //   }, error => {
  //       this.message = 'Gặp lỗi khi lấy danh sách bài viết từ HackerNewss';
  //       this.isLoading = false;
  //       clearInterval(interval);
  //     });
  // }

  showArticleContent(event) {
    alert(event);
  }

  ngOnInit(): void {
  }

}
