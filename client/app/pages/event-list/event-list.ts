import {Page} from 'ionic-angular';
import {Event} from './../../models/Event';

@Page({
  templateUrl: 'build/pages/event-list/event-list.html'
})

export class EventListPage {
  eventList: Array<Event>;

  constructor() {
    this.eventList = [];
    this.eventList.push(<Event>{
      eventName: "Parklife",
      imageUrl: "img/event1.jpg",
      venue: "Heaton Park"
    });
    this.eventList.push(<Event>{
      eventName: "Ants",
      imageUrl: "img/event2.png",
      venue: "Ushuaia Hotel"
    });
    this.eventList.push(<Event>{
      eventName: "Usual Suspects",
      imageUrl: "img/event3.jpg",
      venue: "Sankeys Ibiza"
    });
    this.eventList.push(<Event>{
      eventName: "Vagabundos",
      imageUrl: "img/event4.jpg",
      venue: "Pacha Ibiza"
    });
  }
}
