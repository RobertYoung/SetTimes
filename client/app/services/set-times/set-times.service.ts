import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AppVariables } from '../../app.variables';
import { SpotifyArtistSearchResponse, Item } from '../../models/responses/SpotifyArtistSearchResponse';

@Injectable()
export class SetTimesService {

  constructor (private http: Http) {}

  private url = AppVariables.SET_TIMES_SERVICE_DOMAIN;  // URL to web API

  searchArtist (query: string): Observable<Item> {
    return this.http.get(`http://${this.url}/artist?q=${query}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) : Item {
    let body = res.json();
    console.log(body);
    return body.artists || { };
    // return body.artists;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
