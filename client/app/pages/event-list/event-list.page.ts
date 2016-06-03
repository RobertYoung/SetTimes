import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {EventDetailPage} from '../event-detail/event-detail.page';
import {SetTimes} from '../../models/SetTimes';
import {Room} from '../../models/Room';

@Page({
  templateUrl: 'build/pages/event-list/event-list.page.html'
})

export class EventListPage {
  eventList: Array<Event>;

  constructor(private nav: NavController, navParams: NavParams) {
    this.eventList = [];

    let setTimes1 = new SetTimes();
    setTimes1.createdBy = {
      username: "BobbyYoung"
    };
    setTimes1.createdOn = new Date();
    setTimes1.votes = 15;
    setTimes1.rooms = [<Room>
      {
        name: "Main Temple",
        startTime: new Date(),
        artists: [
          {
            name: "DJ Rob Young",
            startTime: new Date(),
            setLength: 120,
            imageUrl: "img/artist1.jpg"
          }
        ]
      }
    ];

    this.eventList.push(<Event>{
      name: "Parklife",
      imageUrl: "img/event1.jpg",
      venue: "Heaton Park",
      setTimes: [setTimes1]
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
