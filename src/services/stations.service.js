/**
 * @overview Stations API interface
 * @module   stations.service
 * @requires @angular/core/Injectable
 * @requires @angular/http/Http
 * @requires rxjs/Observable
 */

import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const STATIONS_URL = 'http://public-radio-api.herokuapp.com/stations';

function deserialize(response) {
  return response.json();
}

function handleError(error) {
  return Observable.throw(new Error('Unexpected error in fetching stations for Stations#search'));
}

@Injectable()
class StationService {
  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this.http = http;
  }

  /**
   * Search for radio stations through the Public Radio Tuner API
   * @param   {Map} filter - Hashmap of filter/search options
   * @returns {Observable} HTTP response observable
   */
  search(filter) {
    const requestOptions = {};

    if (filter) {
      const params = new URLSearchParams();

      requestOptions.search = params;
      filter.forEach((value, param) => params.set(param, value));
    }

    return this.http
      .get(STATIONS_URL, requestOptions)
      .map(deserialize)
      .catch(handleError);
  }
}

export default StationService;
