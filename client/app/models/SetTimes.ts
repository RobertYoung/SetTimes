import {Room} from './Room';
import {User} from './User';
import * as _ from 'lodash';

export class SetTimes {
  public _id: number;
  public rooms: Array<Room>;
  public createdBy: User;
  public createdOn: Date;
  public votes: number;

  constructor() {}

}
