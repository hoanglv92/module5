import {Component, Injectable, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../app/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  iShowFrom:boolean=false;
  isShowView: boolean=false;
  Articles: Article[] =[];

constructor(private httpClient: HttpClient) {
  this.getListFromApi();
}
ngOnInit() {
}

  urlNew: string;
  titleNew: string;
  isShowListArticle: boolean= true;

  getListFromApi(){
    // @ts-ignore
    this.httpClient
      .get<Article[]>('https://api.hnpwa.com/v0/news/1.json')
      .subscribe((newItem) => {
        this.Articles=newItem;
      });
  }

  addArticle(newAr) {
    newAr.id = this.Articles.length+1;
    this.Articles.push(newAr)
  }

  deleteArticle(id: number){
   if (confirm('do you want continue?')) {
     const index =this.Articles.findIndex(e => e.id === id);
     this.Articles.splice(index,1);
   }
  }

  showArticle(id: number, title: string, url: string){
    this.isShowListArticle=!this.isShowListArticle;
    this.isShowView=!this.isShowView;
    this.titleNew = title;
    this.urlNew = url;
  }
  displayViewAdd(isShow){
    if (isShow==false){
      this.isShowListArticle=true;
      this.isShowView=false;
      this.iShowFrom=false;
    }else {
      this.isShowListArticle=false;
      this.isShowView=false;
      this.iShowFrom=true;
    }
  }
}
