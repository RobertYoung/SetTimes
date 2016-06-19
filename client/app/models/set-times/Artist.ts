import { SpotifyArtist } from './../spotify/SpotifyArtist';

export class Artist extends SpotifyArtist {
  public name: string;
  public start_time: Date;
  public end_time: Date;
  public image_url: string;
  public set_length: number;
}
