import { SpotifyArtist } from './SpotifyArtist';

export class Artist extends SpotifyArtist {
  public name: string;
  public startTime: Date;
  public endTime: Date;
  public imageUrl: string;
}
