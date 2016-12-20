/**
 * @overview Main application entry-point
 * @module   app
 * @requires @angular/core/Component
 * @requires @angular/http/HTTP_PROVIDERS
 * @requires @angular/platform-browser-dynamic
 * @requires rxjs/add/observable/throw
 * @requires rxjs/add/operator/catch
 * @requires rxjs/add/operator/debounceTime
*  @requires rxjs/add/operator/map
 * @requires player
 * @requires styles
 */

import { Component }      from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap }      from '@angular/platform-browser-dynamic';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { Player } from '..';
import styles     from './styles.css';
import template   from './template.html';

@Component({
  selector: 'app',
  directives: [Player],
  providers: [HTTP_PROVIDERS],
  styles: [styles],
  template
})
class AppComponent {}

bootstrap(AppComponent, []);
