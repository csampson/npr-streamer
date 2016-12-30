/**
 * @overview Radio player widget
 * @module   player
 * @requires @angular/core
 * @requires playlist.service
 * @requires station.service
 * @requires style.css
 * @requires template.html
 */

import { Component  }  from '@angular/core';
import styles          from './styles.css';
import template        from './template.html';
import { PlaylistService, StationService } from '../../services';

@Component({
  providers: [StationService, PlaylistService],
  selector: 'player',
  styles: [styles],
  template
})
class Player {
  static get parameters() {
    return [[StationService], [PlaylistService]];
  }

  constructor(stationService, playlistService) {
    this.playing = false;
    this.station = null;

    this.stationService  = stationService;
    this.playlistService = playlistService;
  }

  play() {
    this.playing = true;
    return this;
  }

  pause() {
    this.playing = false;
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
          .subscribe(stations => {
            this.station = this.playlistService.load(stations[0]);
          });
      },
      error => {
        /** @todo handle error */
      });

    return this;
  }
}

export default Player;
