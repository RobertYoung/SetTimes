import {Injectable, NgZone} from '@angular/core';
import {Event} from '../../models/Event';
import {SetTimes} from '../../models/SetTimes';
import * as _ from 'lodash';

@Injectable()
export class SearchService {

  constructor() {}

  getSetTimesById(event: Event, id: number) : SetTimes {
    return _.find(event.setTimes, (setTime: SetTimes) => {
      return setTime._id === id;
    });
  }
}
