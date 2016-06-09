export interface Product {
    id: string;
    name: string;
}

export interface Subscription {
    product: Product;
}

export interface SoundcloudArtist {
    playlist_count: number;
    track_count: number;
    subscriptions: Subscription[];
    first_name: string;
    last_name: string;
    full_name: string;
    city: string;
    description: string;
    country?: any;
    public_favorites_count: number;
    followers_count: number;
    followings_count: number;
    plan: string;
    myspace_name?: any;
    discogs_name?: any;
    website_title: string;
    website: string;
    reposts_count: number;
    comments_count: number;
    online: boolean;
    likes_count: number;
    avatar_url: string;
    id: number;
    kind: string;
    permalink_url: string;
    uri: string;
    username: string;
    permalink: string;
    last_modified: string;
}
