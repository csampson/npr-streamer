/* eslint-env mocha */

import { URLSearchParams, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import Stations       from './stations';

describe('Stations', () => {
  const STATIONS_URL = 'http://public-radio-api.herokuapp.com/stations';
  let Http;
  let stationsService;

  beforeEach(() => {
    Http = {
      get: sandbox.stub().returns(new Observable())
    };

    stationsService = new Stations(Http);
  });

  describe('#search', () => {
    it('should return an [Observable]', () => {
      stationsService.search().should.be.instanceOf(Observable);
    });

    it('should deserialize the response', () => {
      const stations = [
        { id: 1 }
      ];

      const response = new Response({
        body: stations
      });

      Http.get = sandbox.stub().returns(
        Observable.of(response)
      );

      stationsService.search().subscribe(result => {
        result.should.equal(stations);
      });
    });

    context('when there are no filter params', () => {
      it('should make a request to the stations API', () => {
        stationsService.search();
        Http.get.should.have.been.calledWith(STATIONS_URL);
      });
    });

    context('when there are filter params', () => {
      it('should make a request to the stations API with a filter query string param', () => {
        const filter = new Map()
          .set('foo', 'bar')
          .set('baz', 'qux');

        const queryParams = new URLSearchParams();

        queryParams.set('<param.1>', '<value.1>');
        queryParams.set('<param.2>', '<value.2>');

        stationsService.search(filter);
        Http.get.should.have.been.calledWith(STATIONS_URL, { search: queryParams });
      });
    });
  });
});
