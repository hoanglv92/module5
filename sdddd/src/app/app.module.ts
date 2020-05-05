import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddArticleComponent } from './add-article/add-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddArticleComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
