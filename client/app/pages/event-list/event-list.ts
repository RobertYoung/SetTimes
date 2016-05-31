import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {EventDetailPage} from '../event-detail/event-detail';

@Page({
  templateUrl: 'build/pages/event-list/event-list.html'
})

export class EventListPage {
  eventList: Array<Event>;

  constructor(private nav: NavController, navParams: NavParams) {
    this.eventList = [];
    this.eventList.push(<Event>{
      name: "Parklife",
      imageUrl: "img/event1.jpg",
      venue: "Heaton Park"
    });
    this.eventList.push(<Event>{
      name: "Ants",
      imageUrl: "img/event2.png",
      venue: "Ushuaia Hotel"
    });
    this.eventList.push(<Event>{
      name: "Usual Suspects",
      imageUrl: "img/event3.jpg",
      venue: "Sankeys Ibiza"
    });
    this.eventList.push(<Event>{
      name: "Vagabundos",
      imageUrl: "img/event4.jpg",
      venue: "Pacha Ibiza"
    });
  }

  eventTapped($event, event: Event) {
    this.nav.push(EventDetailPage, {
      event: event
    });
  }
}
