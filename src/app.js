/**
 * @overview Main application entry-point
 * @module   app
 * @requires @angular/core/Component
 * @requires @angular/http/HTTP_PROVIDERS
 * @requires @angular/platform-browser-dynamic
 * @requires player
 */

import { Component }      from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap }      from '@angular/platform-browser-dynamic';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import Player from './components/player';

@Component({
  selector: 'app',
  template: `<player></player>`,
  directives: [Player],
  providers: [HTTP_PROVIDERS]
})
class AppComponent {}

bootstrap(AppComponent, []);
