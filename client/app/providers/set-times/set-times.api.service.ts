import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AppVariables } from '../../app.variables';
import { SpotifyArtistSearchResponse } from '../../models/SpotifyArtistSearchResponse';

@Injectable()
export class SetTimesAPIService {

  constructor (private http: Http) {}

  private url = AppVariables.SET_TIMES_SERVICE_DOMAIN;  // URL to web API

  searchArtist (query: string): Observable<SpotifyArtistSearchResponse> {
    return this.http.get(`http://${this.url}/artist?q=${query}`)
                    .map(this.searchArtistResponse)
                    .catch(this.searchArtistError);
  }

  private searchArtistResponse(res: Response) : SpotifyArtistSearchResponse {
    let body = res.json();
    console.log(body);
    return body; //body.artists || { };
    // return body.artists;
  }

  private searchArtistError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
