import {FBEvent} from './facebook/event';
import {Paging} from './facebook/api';

export interface IFacebookEventSearchResponse {
  data: FBEvent[];
  paging: Paging;
}
