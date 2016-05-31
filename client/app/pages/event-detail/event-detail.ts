import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';

@Page({
  templateUrl: 'build/pages/event-detail/event-detail.html'
})

export class EventDetailPage {
  event: Event;

  constructor(private nav: NavController, navParams: NavParams) {
    this.event = navParams.data.event;
  }
}
