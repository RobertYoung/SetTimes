import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/set-times/Event';
import {EventDetailComponent} from '../event-detail/event-detail';
import {EventInsertTypeComponent} from '../event-insert-type/event-insert-type';
import {SetTimes} from '../../models/set-times/SetTimes';
import {Room} from '../../models/set-times/Room';

@Component({
  templateUrl: 'build/pages/event-list/event-list.html'
})
export class EventListComponent {
  eventList: Array<Event>;

  constructor(private nav: NavController, private navParams: NavParams, public view: ViewController) {
    this.eventList = [];

    let setTimes1 = new SetTimes();
    setTimes1.createdBy = {
      username: "BobbyYoung"
    };
    setTimes1.createdOn = new Date();
    setTimes1.votes = 15;
    setTimes1.rooms = [<Room>
      {
        name: "Paradise",
        startTime: "",
        artists: [
          {
            name: "Jamie Jones",
            startTime: new Date(),
            setLength: 120,
            imageUrl: "img/dummy/artist2.jpg"
          },
          {
            name: "Joseph Capriati",
            startTime: new Date(),
            setLength: 120,
            imageUrl: "img/dummy/artist3.jpg"
          },
          {
            name: "KiNK",
            startTime: new Date(),
            setLength: 120,
            imageUrl: "img/dummy/artist4.jpg"
          },
          {
            name: "Black Coffee",
            startTime: new Date(),
            setLength: 120,
            imageUrl: "img/dummy/artist6.jpg"
          },
          {
            name: "Patrick Topping",
            startTime: new Date(),
            setLength: 120,
            imageUrl: "img/dummy/artist5.jpg"
          }
        ]
      },
      <Room>
        {
          name: "Elrow",
          startTime: "",
          artists: [
            {
              name: "Eats Everything",
              startTime: new Date(),
              setLength: 120,
              imageUrl: "img/dummy/artist7.jpg"
            },
            {
              name: "Joris Voorn",
              startTime: new Date(),
              setLength: 120,
              imageUrl: "img/dummy/artist8.jpg"
            },
            {
              name: "Jackmaster",
              startTime: new Date(),
              setLength: 120,
              imageUrl: "img/dummy/artist9.jpg"
            },
            {
              name: "Skream",
              startTime: new Date(),
              setLength: 120,
              imageUrl: "img/dummy/artist10.jpg"
            }          ]
        }
    ];

    this.eventList.push(<Event>{
      name: "Parklife",
      imageUrl: "img/dummy/event1.jpg",
      venue: "Heaton Park",
      startTime: new Date(),
      setTimes: [setTimes1]
    });

    this.eventList.push(<Event>{
      name: "Ants",
      imageUrl: "img/dummy/event2.png",
      venue: "Ushuaia Hotel"
    });

    this.eventList.push(<Event>{
      name: "Usual Suspects",
      imageUrl: "img/dummy/event3.jpg",
      venue: "Sankeys Ibiza"
    });

    this.eventList.push(<Event>{
      name: "Vagabundos",
      imageUrl: "img/dummy/event4.jpg",
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
