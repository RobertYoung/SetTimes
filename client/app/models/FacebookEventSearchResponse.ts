import {FBEvent} from './facebook/FBEvent';
import {Paging} from './facebook/FBAPI';

export interface IFacebookEventSearchResponse {
  data: FBEvent[];
  paging: Paging;
}
