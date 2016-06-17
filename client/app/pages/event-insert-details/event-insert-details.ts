import {Page, NavController, NavParams, Modal} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/Event';
import {Facebook} from 'ionic-native';
import {FacebookAPIService} from '../../providers/facebook/facebook.api.service';
import {FacebookEventsModal} from '../facebook-events/facebook-events';

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
        this.showFacebookEventsModal();
      }
    });
  }

  showFacebookEventsModal() {
    let modal = Modal.create(FacebookEventsModal);
    this.nav.present(modal);
  }
}
