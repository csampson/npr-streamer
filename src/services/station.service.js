/**
 * @overview Stations API interface
 * @module   stations.service
 * @requires @angular/core/Injectable
 * @requires @angular/http/Http
 * @requires @angular/http/RequestOptions
 * @requires @angular/http/URLSearchParams
 * @requires rxjs/Observable
 */

import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
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
   * @param   {Object} filter - Hashmap of filter/search options
   * @returns {Observable} HTTP response observable
   */
  search(filter) {
    const requestOptions = new RequestOptions();

    if (filter) {
      const params = new URLSearchParams();

      params.set('filter', JSON.stringify(filter));
      requestOptions.search = params;
    }

    return this.http
      .get(STATIONS_URL, requestOptions)
      .map(deserialize)
      .catch(handleError);
  }
}

export default StationService;
