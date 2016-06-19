import {Page, NavController, NavParams, Modal, ViewController} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/set-times/Event';
import {Facebook} from 'ionic-native';
import {FacebookAPIService} from '../../providers/facebook/facebook.api.service';
import {FacebookEventsModal} from '../facebook-events/facebook-events';
import {SaveButtonsComponent} from '../../components/save-buttons/save-buttons.component';
import {EventListComponent} from '../event-list/event-list';
import * as automapper from 'automapper-ts';
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';

@Component({
  templateUrl: 'build/pages/event-insert-details/event-insert-details.html',
  directives: [SaveButtonsComponent]
})
export class EventInsertDetailsComponent {
  event: Event;
  eventListView: ViewController;

  constructor(private nav: NavController, navParams: NavParams, public facebookAPIService: FacebookAPIService, public data: SetTimesDataService) {
    this.event = navParams.data.event || new Event();
    this.eventListView = navParams.data.eventListView;
  }

  connectToFacebook() {
    Facebook.login(["public_profile", "email", "user_friends", "user_events"]).then((data) => {
      console.log(data);
      this.getUserEvents();
    });
  }

  getUserEvents() {
    this.facebookAPIService.getUsersEvents().then((events) => {
      if (events) {
        this.showFacebookEventsModal(events);
      }
    });
  }

  showFacebookEventsModal(data) {
    let modal = Modal.create(FacebookEventsModal, {
      facebookEvents: data
    });

    modal.onDismiss(data => {
        if (data.event) {
          const facebookEvent = automapper.map("FBEvent", "Event", data.event);
          _.merge(this.event, facebookEvent);
          console.log(this.event);
        }
    });

    this.nav.present(modal);
  }

  saveEvent() {
    this.data.eventList.push(this.event);
    this.nav.popTo(this.eventListView);
  }
}
