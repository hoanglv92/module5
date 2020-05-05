import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressbarComponent,
    CountdownTimerComponent,
    RatingBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
