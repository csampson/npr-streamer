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
    this.station = null;
    this.playing = false;
  }

  play() {
    this.playing = true;
    return this;
  }

  pause() {
    this.playing = false;
    return this;
  }

  load(station) {
    if (!station) {
      throw new Error('Must pass a station object to `Player#load`');
    }

    this.station = station;
    return this;
  }
}

export default Player;
