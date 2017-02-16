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

const STATUS_PLAYING = 'playing';
const STATUS_READY   = 'ready';
const STATUS_LOADING = 'loading';

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
    this.station = null;
    this.player  = null;
    this.status  = STATUS_LOADING;

    this.stationService  = stationService;
    this.playlistService = playlistService;
  }

  play() {
    this.player.play();
    this.status = STATUS_PLAYING;
    return this;
  }

  stop() {
    this.player.pause();
    this.status = STATUS_READY;
    return this;
  }

  toggle() {
    if (this.status === STATUS_READY) {
      return this.play();
    }

    return this.stop();
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
            if (stations.length) {
              this.station = stations[0];
              this.player  = new global.Audio('http://tektite.streamguys1.com:5140/wwnolive'); // damn it
              this.play();
            }
          });
      },
      error => {
        /** @todo handle error */
      });

    return this;
  }
}

export default Player;
