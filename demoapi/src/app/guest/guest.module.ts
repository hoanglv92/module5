import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import { LayoutComponent } from './layout/layout.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ListVideoComponent } from './list-video/list-video.component';

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
  declarations: [LayoutComponent, ListArticleComponent, ListVideoComponent],
  imports: [
    CommonModule
  ]
})
export class GuestModule { }
