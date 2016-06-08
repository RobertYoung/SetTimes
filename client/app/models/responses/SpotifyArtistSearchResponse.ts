import { SpotifyArtist } from '../SpotifyArtist';

export interface Item {
  href: string;
  items: SpotifyArtist[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface SpotifyArtistSearchResponse {
  artists: Item;
}
