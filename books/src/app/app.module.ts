import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {enableProdMode} from '@angular/core';

import { AppComponent } from './app.component';
import { ListBookComponent } from './list-book/list-book.component';
import {HttpClientModule} from "@angular/common/http";
import { FromEditComponent } from './from-edit/from-edit.component';
import { AddbookComponent } from './addbook/addbook.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    FromEditComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
