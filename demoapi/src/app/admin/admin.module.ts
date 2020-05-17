import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FromEditComponent } from './from-edit/from-edit.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '/add',
        component: AddArticleComponent
      },
      {
        path: '',
        component: ListArticleComponent
      }
    ]
  }
]

@NgModule({
  declarations: [LayoutComponent, AddArticleComponent, ListArticleComponent, FromEditComponent, NavBarComponent,  ViewArticleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
