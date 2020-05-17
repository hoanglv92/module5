import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {book} from "../book";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(private bookService: BookService) {
    this.getListFromApi();
  }
  books: book[]=[];
  amount: number;

  isShowList: boolean= true;
  isShowAddBook: boolean= false;

  ngOnInit(): void {
    this.getListFromApi();
  }
  getListFromApi(){
    this.bookService.fetchArticleFromApi().subscribe(item =>{
      this.books= item;
      this.amount=this.books.length;
    });
  }
  removeBook(book: book){
    if (confirm('Ban chac chan muon xoa?')){
      this.bookService.remoreArticle(book.id);
      console.log(book.id);
      this.getListFromApi();
    }
  }
  save(book: book){
    this.bookService.saveArticle(book);
    this.getListFromApi();
  }
  showAddBook(){
    this.isShowList=!this.isShowList;
    this.isShowAddBook=!this.isShowAddBook;
  }
  addBook(book: book){
    this.bookService.createArticle(book);
    this.getListFromApi();
  }
}
