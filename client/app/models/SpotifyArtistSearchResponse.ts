import { SpotifyArtist, IItem } from './spotify/SpotifyArtist';
import {SoundcloudArtist} from './soundcloud/SoundcloudArtist';

export interface SpotifyArtistSearchResponse {
  spotify: IItem;
  soundcloud: Array<SoundcloudArtist>;
}
