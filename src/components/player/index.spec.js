/* eslint-env mocha */

import Player from '.';

describe('PlayerComponent', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  describe('init', () => {
    it('should setup default state', () => {
      player.should.have.property('station', null);
      player.playing.should.be.false;
    });
  });

  describe('#play', () => {
    it('should change the state to playing', () => {
      player.play();
      player.playing.should.be.true;
    })
  });

  describe('#pause', () => {
    it('should change the state to paused', () => {
      player.play().pause();
      player.playing.should.be.false;
    });
  });

  describe('#load', () => {
    it('should load a given station object', () => {
      const station = {};

      player.load(station);
      player.station.should.equal(station);
    });

    xcontext('when no station object is provided', () => { 
      it('should throw an error', () => {
        global.sandbox.spy(player, 'load');
      });
    });
  });
});
