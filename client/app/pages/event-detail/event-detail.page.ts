import {Page, NavController, NavParams, Alert} from 'ionic-angular';
import {Event} from './../../models/Event';
import {Room} from './../../models/Room';
import {SetTimes} from './../../models/SetTimes';
import {SetTimesPage} from './../set-times/set-times.page';
import {SearchService} from '../../services/helpers/search.service';

@Page({
  templateUrl: 'build/pages/event-detail/event-detail.page.html'
})

export class EventDetailPage {
  event: Event;

  constructor(private nav: NavController, private navParams: NavParams, private search: SearchService) {
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

  getTotalArtists(setTimes: SetTimes) : number {
    return this.search.getTotalArtists(setTimes);
  }
}
