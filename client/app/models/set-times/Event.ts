import {SetTimes} from './SetTimes';
import * as _ from 'lodash';

export class Event {
  public _id: string;
  public facebookId: string;
  public name: string;
  public startTime: Date;
  public endTime: Date;
  public venue: string;
  public imageUrl: string;
  public setTimes: Array<SetTimes> = [];

  constructor() {}

}
