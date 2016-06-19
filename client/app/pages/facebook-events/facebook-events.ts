import {Component} from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';
import {FBEvent} from '../../models/facebook/FBEvent';

@Component({
  templateUrl: 'build/pages/facebook-events/facebook-events.html'
})
export class FacebookEventsModal {
  facebookEvents = [];

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    this.facebookEvents = this.navParams.data.facebookEvents;
  }

  close(event?: FBEvent) {
    this.viewCtrl.dismiss({
      event: event
    });
  }

  selectEvent(event: FBEvent) {
    this.close(event);
  }
}
