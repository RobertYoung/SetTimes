import {Artist} from './Artist';

export class Room {
  public name: string;
  public startTime: string;
  public artists: Array<Artist>;

  totalArtists() : number {
      return this.artists.length;
  }
}
