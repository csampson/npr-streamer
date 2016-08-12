/**
 * @overview Radio player widget
 * @module   player
 * @requires @angular/core
 * @requires stations
 * @requires style.css
 * @requires template.html
 */

import { Component  }  from '@angular/core';
import StationsService from '../../services/stations';
import styles          from './styles.css';
import template        from './template.html';

@Component({
  selector: 'player',
  providers: [StationsService],
  styles: [styles],
  template
})
class Player {
  static get parameters() {
    return [[StationsService]];
  }

  constructor(stationsService) {
    this.state = {
      currentStation: null,
      stations: [],
      playing: false
    };

    this.stationsService = stationsService;
  }
}

export default Player;
