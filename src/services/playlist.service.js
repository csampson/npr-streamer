/**
 * @overview Stores and manages 'now playing' and pinned radio stations
 * @module   playlist.service
 * @requires @angular/core/Injectable
 */

import { Injectable } from '@angular/core';

@Injectable()
class PlaylistService {
  constructor() {
    this.currentStation = null;
    this.stations       = new Set();
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

    this.stations.add(station);
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

    this.stations.delete(station);
    return this;
  }

  /**
   * Set a given [pinned] station as the currently playing station
   * @param   {Object} station - The given station object to set to now-playing
   * @returns {PlaylistService} Playlist service instance
   */
  play(station) {
    if (!station) {
      throw new Error('Invalid or missing argument `station` for `Playlist#play`');
    }

    // Add the station if it isn't already pinned
    if (!this.stations.has(station)) {
      this.add(station);
    }

    this.currentStation = station;
    return this;
  }
}

export default PlaylistService;
