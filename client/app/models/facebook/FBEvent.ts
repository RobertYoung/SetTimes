
export interface Cover {
  offset_x: number;
  offset_y: number;
  source: string;
  id: string;
}

export interface Owner {
  name: string;
  id: string;
  category: string;
  link: string;
  namespace: string;
}

export interface Location {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  street: string;
  zip: string;
}

export interface Place {
  name: string;
  location: Location;
  id: string;
}

export interface FBEvent {
  attending_count: number;
  cover: Cover;
  declined_count: number;
  description: string;
  id: string;
  end_time: Date;
  maybe_count: number;
  name: string;
  noreply_count: number;
  owner: Owner;
  place: Place;
  start_time: Date;
  ticket_uri: string;
  timezone: string;
  updated_time: Date;
  rsvp_status: string;
}
