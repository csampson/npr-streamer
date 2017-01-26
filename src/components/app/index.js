/**
 * @overview Main application container-component
 * @module   app
 * @requires @angular/core
 * @requires styles.css
 * @requires template.html
 */

import { Component } from '@angular/core';

import styles   from './styles.css';
import template from './template.html';

@Component({
  selector: 'app',
  styles: [styles],
  template
})
class AppComponent {}

export default AppComponent;
