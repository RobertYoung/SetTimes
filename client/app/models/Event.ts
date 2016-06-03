import {SetTimes} from './SetTimes';
import * as _ from 'lodash';

export class Event {
  public eventId: string;
  public name: string;
  public startTime: Date;
  public endTime: Date;
  public venue: string;
  public imageUrl: string;
  public setTimes: Array<SetTimes>;

  constructor() {}

  getSetTimesById(id: number) : SetTimes {
    return _.find(this.setTimes, (data: SetTimes) => {
        return data._id === id;
    });
  }
}
