import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavIconComponent } from './fav-icon/fav-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    FavIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
