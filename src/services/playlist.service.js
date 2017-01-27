/**
 * @overview Stores and manages 'now playing' and pinned radio stations
 * @module   playlist.service
 * @requires @angular/core/Injectable
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
class PlaylistService {
  constructor() {
    this._current = new BehaviorSubject(null);
    this.current  = this._current.asObservable();

    this.stations = new Map();
  }
  /**
   * Add a given station to the list of pinned stations
   * @param   {Object} station - The given station object to add
   * @returns {PlaylistService} Playlist service instance
   */
  add(station) {
    if (!station) {
      throw new Error('Invalid or missing argument `station` for `Playlist#add`');
    }

    this.stations.set(station.abbreviation, station);
    return this;
  }

  /**
   * Remove a given station from the list of pinned stations
   * @param   {Object} station - The given station object to remove
   * @returns {PlaylistService} Playlist service instance
   */
  remove(station) {
    if (!station) {
      throw new Error('Invalid or missing argument `station` for `Playlist#remove`');
    }

    this.stations.delete(station.abbreviation);
    return this;
  }

  /**
   * Set a given [pinned] station as the currently playing station
   * @param   {Object} station - The given station object to stage
   * @returns {Object} Station object that was staged
   */
  load(station) {
    if (!station) {
      throw new Error('Invalid or missing argument `station` for `Playlist#load`');
    }

    // Add the station if it isn't already pinned
    if (!this.stations.has(station.abbreviation)) {
      this.add(station);
    }

    this._current.next(Object.assign({}, station));

    return station;
  }
}

export default PlaylistService;
