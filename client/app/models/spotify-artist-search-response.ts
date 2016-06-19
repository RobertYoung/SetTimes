import { SpotifyArtist, IItem } from './spotify/artist';
import {SoundcloudArtist} from './soundcloud/artist';

export interface SpotifyArtistSearchResponse {
  spotify: IItem;
  soundcloud: Array<SoundcloudArtist>;
}
