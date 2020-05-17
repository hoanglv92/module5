import { Injectable } from '@angular/core';
import {book} from "./book";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book: book []=[];
  constructor(private httpClient: HttpClient) {
    this.fetchArticleFromApi().subscribe((newItem) => {
      this.book=newItem;
    },error => {
      console.log('gap loi'+error);
    });
  }

  fetchArticleFromApi(){
    return this.httpClient
      .get<book[]>('http://localhost:3000/books');
  }

  getAllArticle(){
    return this.book;
  }

  saveArticle(article: book){
    // @ts-ignore
    this.httpClient.put('http://localhost:3000/books/'+article.id,article).subscribe();

  }

  remoreArticle(id: number){
    // @ts-ignore
    this.httpClient.delete('http://localhost:3000/books/'+id,id).subscribe();

  }

  createArticle(article: book){
    this.httpClient.post('http://localhost:3000/books',article).subscribe();

  }

  searchArticleByTitle(name:string): book[] {
    const foundArticle=this.book.filter(item => {
      item.title.includes(name);
    })
    return foundArticle;
  };

}
