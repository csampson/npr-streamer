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
import StationService from '../../services/stations.service';

@Component({
  providers: [StationService],
  selector: 'player',
  styles: [styles],
  template
})
class Player {
  static get parameters() {
    return [[StationService]];
  }

  constructor(stationService) {
    this.station = null;
    this.playing = false;

    this.stationService = stationService;
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

    this.station = JSON.stringify(station);

    return this;
  }

  streamLocal() {
    /** @todo Add options object to this call */
    global.navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { longitude, latitude } = coords;
        const filter = { geolocation: [latitude, longitude] };

        return this.stationService
          .search(filter)
          .subscribe(stations => this.load(stations[0]));
      },
      error => {
        /** @todo handle error */
      });

    return this;
  }
}

export default Player;
