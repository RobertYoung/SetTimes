import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/set-times/event';
import {EventDetailComponent} from '../event-detail/event-detail';
import {EventInsertTypeComponent} from '../event-insert-type/event-insert-type';
import {SetTimes} from '../../models/set-times/set-times';
import {Room} from '../../models/set-times/room';
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';

@Component({
  templateUrl: 'build/pages/event-list/event-list.html'
})
export class EventListComponent {
  eventList: Array<Event>;

  constructor(private nav: NavController, private navParams: NavParams, public view: ViewController, public data: SetTimesDataService) {
    this.eventList = this.data.event_list;

    let setTimes1 = new SetTimes();
    setTimes1.created_by = {
      username: "BobbyYoung"
    };
    setTimes1.created_on = new Date();
    setTimes1.votes = 15;
    setTimes1.rooms = [<Room>
      {
        name: "Paradise",
        start_time: "",
        artists: [
          {
            name: "Jamie Jones",
            start_time: new Date(),
            set_length: 120,
            image_url: "img/dummy/artist2.jpg"
          },
          {
            name: "Joseph Capriati",
            start_time: new Date(),
            set_length: 120,
            image_url: "img/dummy/artist3.jpg"
          },
          {
            name: "KiNK",
            start_time: new Date(),
            set_length: 120,
            image_url: "img/dummy/artist4.jpg"
          },
          {
            name: "Black Coffee",
            start_time: new Date(),
            set_length: 120,
            image_url: "img/dummy/artist6.jpg"
          },
          {
            name: "Patrick Topping",
            start_time: new Date(),
            set_length: 120,
            image_url: "img/dummy/artist5.jpg"
          }
        ]
      },
      <Room>
        {
          name: "Elrow",
          start_time: "",
          artists: [
            {
              name: "Eats Everything",
              start_time: new Date(),
              set_length: 120,
              image_url: "img/dummy/artist7.jpg"
            },
            {
              name: "Joris Voorn",
              start_time: new Date(),
              set_length: 120,
              image_url: "img/dummy/artist8.jpg"
            },
            {
              name: "Jackmaster",
              start_time: new Date(),
              set_length: 120,
              image_url: "img/dummy/artist9.jpg"
            },
            {
              name: "Skream",
              start_time: new Date(),
              set_length: 120,
              image_url: "img/dummy/artist10.jpg"
            }          ]
        }
    ];

    this.eventList.push(<Event>{
      name: "Parklife",
      image_url: "img/dummy/event1.jpg",
      venue: "Heaton Park",
      start_time: new Date(),
      set_times: [setTimes1]
    });

    this.eventList.push(<Event>{
      name: "Ants",
      image_url: "img/dummy/event2.png",
      venue: "Ushuaia Hotel"
    });

    this.eventList.push(<Event>{
      name: "Usual Suspects",
      image_url: "img/dummy/event3.jpg",
      venue: "Sankeys Ibiza"
    });

    this.eventList.push(<Event>{
      name: "Vagabundos",
      image_url: "img/dummy/event4.jpg",
      venue: "Pacha Ibiza"
    });
  }

  eventPressed($event, event: Event) {
    this.nav.push(EventDetailComponent, {
      event: event
    });
  }

  createEventButtonPressed() {
    this.nav.push(EventInsertTypeComponent, {
      eventListView: this.view
    });
  }
}
