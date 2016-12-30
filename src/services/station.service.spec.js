/* eslint-env mocha */

import { Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import StationService from './station.service';

describe('StationService', () => {
  const STATIONS_URL = 'http://public-radio-api.herokuapp.com/stations';
  let Http;
  let stationService;

  beforeEach(() => {
    Http = {
      get: sandbox.stub().returns(new Observable())
    };

    stationService = new StationService(Http);
  });

  describe('#search', () => {
    it('should return an [Observable]', () => {
      stationService.search().should.be.instanceOf(Observable);
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

      stationService.search().subscribe(result => {
        result.should.equal(stations);
      });
    });

    context('when there are no filter params', () => {
      it('should make a request to the stations API', () => {
        stationService.search();
        Http.get.should.have.been.calledWith(STATIONS_URL);
      });
    });

    context('when there are filter params', () => {
      it('should make a request to the stations API with a filter query string param', () => {
        const filter      = { foo: 'bar', baz: 'qux' };
        const queryParams = new URLSearchParams();
        const requestOptions = new RequestOptions();

        queryParams.set('<param.1>', '<value.1>');
        queryParams.set('<param.2>', '<value.2>');

        requestOptions.search = queryParams;

        stationService.search(filter);
        Http.get.should.have.been.calledWith(STATIONS_URL, requestOptions);
      });
    });
  });
});
