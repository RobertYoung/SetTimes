import { SpotifyArtist, IItem } from '../SpotifyArtist';
import {SoundcloudArtist} from '../SoundcloudArtist';

export interface SpotifyArtistSearchResponse {
  spotify: IItem;
  soundcloud: Array<SoundcloudArtist>;
}
