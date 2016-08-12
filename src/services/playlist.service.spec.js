/* eslint-env mocha */

import PlaylistService from './playlist.service';

describe('PlaylistService', () => {
  let playlistService;

  beforeEach(() => {
    playlistService = new PlaylistService();
  });

  describe('#add', () => {
    it('should add the given station to the list', () => {
      const station = { id: 1 };

      playlistService.add(station);
      playlistService.should.satisfy(playlist => playlist.stations.has(station));
    });

    context('when no station is provided', () => {
      it('should throw an exception', () => {
        playlistService.add.should.throw(Error, 'Invalid or missing argument `station` for `Playlist#add`');
      });
    });
  });

  describe('#remove', () => {
    it('should remove the given station from the list', () => {
      const station = { id: 1 };

      playlistService.add(station);
      playlistService.remove(station);

      playlistService.should.not.satisfy(playlist => playlist.stations.has(station));
    });

    context('when no station is provided', () => {
      it('should throw an exception', () => {
        playlistService.remove.should.throw(Error, 'Invalid or missing argument `station` for `Playlist#remove`');
      });
    });
  });

  describe('#play', () => {
    it('should assign the given station as the currently playing station', () => {
      const station = { id: 1 };

      playlistService.play(station);
      playlistService.currentStation.should.equal(station);
    });

    context('when no station is provided', () => {
      it('should throw an exception', () => {
        playlistService.play.should.throw(Error, 'Invalid or missing argument `station` for `Playlist#play`');
      });
    });
  });
});
