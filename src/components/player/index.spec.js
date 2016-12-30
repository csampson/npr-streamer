/* eslint-env mocha */

import Player from '.';

describe('PlayerComponent', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  describe('init', () => {
    it('should setup default state', () => {
      player.playing.should.be.false;
      player.should.have.property('station', null);
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
});
