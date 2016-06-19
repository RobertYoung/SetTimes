import {Component} from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/facebook-events/facebook-events.html'
})
export class FacebookEventsModal {
  facebookEvents = [];

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    this.facebookEvents = this.navParams.data.facebookEvents;

    console.log(this.facebookEvents);
  }

  close(event?) {
    this.viewCtrl.dismiss({
      event: event
    });
  }

  selectEvent(event) {
    this.close(event);
  }
}
