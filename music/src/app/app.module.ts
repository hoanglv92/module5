import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SlideComponent } from './slide/slide.component';
import { ShowMusicHotComponent } from './show-music-hot/show-music-hot.component';
import { AlbumHotComponent } from './album-hot/album-hot.component';
import { MusicNewComponent } from './music-new/music-new.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SlideComponent,
    ShowMusicHotComponent,
    AlbumHotComponent,
    MusicNewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
