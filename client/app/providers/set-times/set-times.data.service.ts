import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Event} from '../../models/Event';
import {SetTimes} from '../../models/SetTimes';
import {Room} from '../../models/Room';
import {Artist} from '../../models/Artist';

export interface ISetTimesDataService {
  addArtistToRoom() : void;
}

@Injectable()
export class SetTimesDataService {
  event: Event = new Event();
  setTimes: SetTimes = new SetTimes();
  room: Room = new Room();
  artist: Artist = new Artist();
  points: number = 200;

  constructor() {}

  addArtistToRoom() {
    this.room.artists.push(this.artist);
  }
}
