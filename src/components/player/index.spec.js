/* eslint-env mocha */

import Player from '.';

describe('Player', () => {
  let StationsService;
  let player;

  beforeEach(() => {
    StationsService = sandbox.stub({ search: () => {} });
    player = new Player(StationsService);
  });
});
