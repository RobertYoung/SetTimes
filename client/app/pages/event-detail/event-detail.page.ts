import {Page, NavController, NavParams, Alert} from 'ionic-angular';
import {Event} from './../../models/Event';
import {SetTimes} from './../../models/SetTimes';
import {SetTimesPage} from './../set-times/set-times.page';

@Page({
  templateUrl: 'build/pages/event-detail/event-detail.page.html'
})

export class EventDetailPage {
  event: Event;

  constructor(private nav: NavController, navParams: NavParams) {
    this.event = navParams.data.event;
  }

  requestBountyButtonPressed() {
    let alert = Alert.create({
      title: 'Bounty Requested',
      subTitle: 'You have added a bounty of 200 points to this event.',
      buttons: ['Ok']
    });

    this.nav.present(alert);
  }

  goToSetTimes(setTimes: SetTimes) {
    this.nav.push(SetTimesPage, {
      event: this.event,
      setTimes: setTimes
    });
  }
}
