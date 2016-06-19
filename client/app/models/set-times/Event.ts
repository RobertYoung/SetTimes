import {SetTimes} from './SetTimes';
import * as _ from 'lodash';

export class Event {
  public _id: string;
  public facebook_id: string;
  public name: string;
  public start_time: Date;
  public end_time: Date;
  public venue: string;
  public image_url: string;
  public set_times: Array<SetTimes> = [];

  constructor() {}

}
