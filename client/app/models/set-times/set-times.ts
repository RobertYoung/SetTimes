import {Room} from './room';
import {User} from './user';
import * as _ from 'lodash';

export class SetTimes {
  public _id: number;
  public rooms: Array<Room> = [];
  public created_by: User = new User();
  public created_on: Date;
  public votes: number;

  constructor() {}

}
