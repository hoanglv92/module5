import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ListArticleComponent } from './list-article/list-article.component';
import {AddArticleComponent} from "./add-article/add-article.component";
import { LayoutComponent } from './layout/layout.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {FromEditComponent} from "./from-edit/from-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


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
  declarations: [ListArticleComponent, LayoutComponent,
    NavBarComponent, FromEditComponent, AddArticleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
