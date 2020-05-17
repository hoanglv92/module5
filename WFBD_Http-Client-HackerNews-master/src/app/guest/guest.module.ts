import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./article/article.component";
import {ListArticleComponent} from "./list-article/list-article.component";
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ListVideoComponent } from './list-video/list-video.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListArticleComponent
      },
      {
        path: 'video',
        component: ListVideoComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    ArticleComponent,
    ListArticleComponent,
    HeaderComponent,
    ListVideoComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GuestModule { }
