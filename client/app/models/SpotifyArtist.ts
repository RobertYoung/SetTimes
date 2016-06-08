export interface IExternalUrls {
  spotify: string;
}

export interface IFollowers {
  href?: any;
  total: number;
}

export interface IImage {
  height: number;
  url: string;
  width: number;
}

export interface ISpotifyArtist {
  external_urls: IExternalUrls;
  followers: IFollowers;
  genres: string[];
  href: string;
  id: string;
  images: IImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export class ExternalUrls implements IExternalUrls {
  spotify: string;
}

export class Followers implements IFollowers {
  href: any;
  total: number;
}

export class Image implements IImage {
  height: number;
  url: string;
  width: number;
}

export class SpotifyArtist implements ISpotifyArtist {
  external_urls: IExternalUrls;
  followers: IFollowers;
  genres: string[];
  href: string;
  id: string;
  images: IImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
