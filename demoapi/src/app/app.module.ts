import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
// const routes: Routes=[
//   {
//     path: '',
//     loadChildren: () =>import('./guest/guest.module').then(m=>m.GuestModule),
//     data: { preload: true }
//   },
//   {
//     path: 'admin',
//     loadChildren: () =>import('./admin/admin.module').then(m=>m.AdminModule),
//     data: { preload: true }
//   }
// ]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
