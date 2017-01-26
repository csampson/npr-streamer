import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import {
  AppComponent,
  PlayerComponent
} from './components';

import {
  PlaylistService,
  StationService
} from './services';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  providers: [
    PlaylistService,
    StationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
