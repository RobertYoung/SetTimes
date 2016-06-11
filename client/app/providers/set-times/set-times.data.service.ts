import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Event} from '../../models/Event';
import {SetTimes} from '../../models/SetTimes';
import {Room} from '../../models/Room';
import {Artist} from '../../models/Artist';
import * as _ from 'lodash';

export interface ISetTimesDataService {
  addArtistToRoom() : void;
  resetArtist() : void;
  setArtist(artist: Artist) : void;
  editArtistInRoom(artist: Artist) : void;
}

@Injectable()
export class SetTimesDataService {
  event: Event = new Event();
  setTimes: SetTimes = new SetTimes();
  room: Room = new Room();
  artist: Artist = new Artist();
  points: number = 200;

  constructor() {}

  ////////////////////
  // Artist Methods //
  ////////////////////
  resetArtist() {
    this.artist = new Artist();
  }

  setArtist(artist: Artist) {
    this.artist = artist;
  }

  editArtistInRoom() {
    var artistToEdit = _.find(this.room.artists, (artist) => {
      // TODO: Change this to ID
      return artist.name == this.artist.name;
    });

    artistToEdit = this.artist;
  }

  addArtistToRoom() {
    this.room.artists.push(this.artist);
  }

  //////////////////
  // Room Methods //
  //////////////////
  addRoomToSetTimes() {
    this.setTimes.rooms.push(this.room);
  }
}
