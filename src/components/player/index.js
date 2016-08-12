/**
 * @overview Radio player widget
 * @module   player
 * @requires @angular/core
 * @requires style.css
 * @requires template.html
 */

import { Component  } from '@angular/core';
import styles         from './styles.css';
import template       from './template.html';

@Component({
  selector: 'player',
  styles: [styles],
  template
})
class Player {
  constructor() {
    this.state = {
      currentStation: null,
      stations: [],
      playing: false
    };
  }
}

export default Player;
