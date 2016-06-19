import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AppVariables } from '../../app.variables';
import {Facebook} from 'ionic-native';
import {IFacebookEventSearchResponse} from '../../models/FacebookEventSearchResponse';

@Injectable()
export class FacebookAPIService {

  public static FACEBOOK_REQUEST_FIELDS = "fields=attending_count,cover,declined_count,description,id,end_time,maybe_count,name,noreply_count,owner,place,parent_group,rsvp_status,start_time,ticket_uri,timezone,updated_time";

  constructor (private http: Http) {}

  getUsersEvents() : Promise<IFacebookEventSearchResponse> {
    return Facebook.api(`me/events?fields=${FacebookAPIService.FACEBOOK_REQUEST_FIELDS}`, []).then((data) => {
      console.log("Facebook events request:");
      console.log(data);
      return data;
    });
  }

  // searchArtist (query: string): Observable<any> {
  //   return this.http.get(`http://${this.url}/artist?q=${query}`)
  //                   .map(this.searchArtistResponse)
  //                   .catch(this.searchArtistError);
  // }
  //
  // private searchArtistResponse(res: Response) : SpotifyArtistSearchResponse {
  //   let body = res.json();
  //   console.log(body);
  //   return body; //body.artists || { };
  //   // return body.artists;
  // }
  //
  // private searchArtistError (error: any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   // We'd also dig deeper into the error to get a better message
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  //   return Observable.throw(errMsg);
  // }
}
