import {Page, NavController, NavParams, Modal} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/set-times/Event';
import {Facebook} from 'ionic-native';
import {FacebookAPIService} from '../../providers/facebook/facebook.api.service';
import {FacebookEventsModal} from '../facebook-events/facebook-events';
import * as automapper from 'automapper-ts';

@Component({
  templateUrl: 'build/pages/event-insert-details/event-insert-details.html'
})

export class EventInsertDetailsComponent {
  event: Event;

  constructor(private nav: NavController, navParams: NavParams, public facebookAPIService: FacebookAPIService) {
    this.event = navParams.data.event || new Event();
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

    // Getting data from the modal:
    modal.onDismiss(data => {
        if (data.event) {
          this.event = automapper.map("FBEvent", "Event", data.event);
          console.log(this.event);
        }
    });

    this.nav.present(modal);
  }
}
