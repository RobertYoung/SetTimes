import {Artist} from './Artist';

export class Room {
  public name: string;
  public start_time: string;
  public artists: Array<Artist> = [];

  totalArtists() : number {
      return this.artists.length;
  }
}
