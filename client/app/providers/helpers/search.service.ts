import {Injectable, NgZone} from '@angular/core';
import {Event} from '../../models/set-times/Event';
import {Room} from '../../models/set-times/Room';
import {SetTimes} from '../../models/set-times/SetTimes';
import * as _ from 'lodash';

@Injectable()
export class SearchService {

  constructor() {}

  getSetTimesById(event: Event, id: number) : SetTimes {
    return _.find(event.set_times, (setTime: SetTimes) => {
      return setTime._id === id;
    });
  }

  getTotalArtists(setTimes: SetTimes) : number {
    let numberOfArtists: number = 0;

    if (setTimes) {
      _.forEach(setTimes.rooms || [], (room: Room) => {
        numberOfArtists += room.artists.length;
      });
    }

    return numberOfArtists;
  }
}
