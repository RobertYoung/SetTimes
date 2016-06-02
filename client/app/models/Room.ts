import {Artist} from './Artist';

export class Room {
  public name: string;
  public startTime: Date;
  public artists: Array<Artist>;

  totalArtists() : number {
      return this.artists.length;
  }
}
