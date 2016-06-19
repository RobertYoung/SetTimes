import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Event} from '../../models/set-times/event';
import {SetTimes} from '../../models/set-times/set-times';
import {Room} from '../../models/set-times/room';
import {Artist} from '../../models/set-times/artist';
import * as _ from 'lodash';

export interface ISetTimesDataService {
  addArtistToRoom() : void;
  resetArtist() : void;
  setArtist(artist: Artist) : void;
  editArtistInRoom(artist: Artist) : void;
}

@Injectable()
export class SetTimesDataService {
  event_list: Array<Event> = [];
  event: Event;
  set_times: SetTimes;
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
    this.set_times = new SetTimes();
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
    this.set_times.rooms.push(this.room);
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
  addSetTimesToEvent = () => {
    this.event.set_times.push(this.set_times);
  }
}
