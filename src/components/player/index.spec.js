/* eslint-env mocha */

import Player from '.';

describe('PlayerComponent', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  describe('init', () => {
    it('should setup default state', () => {
      player.status.should.equal('loading');
      player.should.have.property('station', null);
    });
  });

  describe('#play', () => {
    it('should change the status to playing', () => {
      player.play();
      player.status.should.equal('playing');
    });
  });

  describe('#toggle', () => {
    context('when the status is ready', () => {
      it('should change the status to playing', () => {
        player.stop();
        player.toggle();
        player.status.should.equal('playing');
      });
    });

    context('when the status is playing', () => {
      it('should change the status to ready', () => {
        player.play();
        player.toggle();
        player.status.should.equal('ready');
      });
    });
  });

  describe('#stop', () => {
    it('should change the status to ready', () => {
      player.play().stop();
      player.status.should.equal('ready');
    });
  });
});
