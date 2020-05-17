import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>import('./guest/guest.module').then(m=>m.GuestModule),
    data: { preload: true }
  },
  {
    path: 'admin',
    loadChildren: () =>import('./admin/admin.module').then(m=>m.AdminModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
