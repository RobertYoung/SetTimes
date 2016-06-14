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
  event: Event;
  setTimes: SetTimes;
  room: Room;
  artist: Artist;
  points: number;

  constructor() {
    this.resetData();
  }

  //////////////////////
  // All Data Methods //
  //////////////////////
  resetData() {
    this.event = new Event();
    this.setTimes = new SetTimes();
    this.room = new Room();
    this.artist = new Artist();
    this.points = 200;
  }

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

  setRoom(room: Room) {
    this.room = room;
  }

  resetRoom() {
    this.room = new Room();
  }

  ///////////////////////
  // Set Times Methods //
  ///////////////////////
  addSetTimesToEvent() {
    this.event.setTimes.push(this.setTimes);
  }
}
