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

  getTotalArtists() : number {
    let numberOfArtists: number = 0;

    _.forEach(this.rooms, (room) => {
      numberOfArtists += room.artists.length;
    });

    return numberOfArtists;
  }

  getTotalRooms() : number {
    return this.rooms.length;
  }
}
