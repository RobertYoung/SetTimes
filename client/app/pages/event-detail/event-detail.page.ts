import {Page, NavController, NavParams, Alert} from 'ionic-angular';
import {Event} from './../../models/Event';
import {Room} from './../../models/Room';
import {SetTimes} from './../../models/SetTimes';
import {SetTimesPage} from './../set-times/set-times.page';
import {SetTimesInsertPage} from './../set-times-insert/set-times-insert.page';
import {SearchService} from '../../providers/helpers/search.service';
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';

@Page({
  templateUrl: 'build/pages/event-detail/event-detail.page.html'
})

export class EventDetailPage {
  editMode: boolean;
  event: Event;

  constructor(private nav: NavController, private navParams: NavParams, private search: SearchService, private data: SetTimesDataService) {
    this.event = navParams.data.event;
  }

  ////////////////
  // Navigation //
  ////////////////
  goToSetTimes(setTimes: SetTimes) {
    this.nav.push(SetTimesPage, {
      event: this.event,
      setTimes: setTimes
    });
  }

  goToInsertSetTimes() {
    this.nav.push(SetTimesInsertPage, {
      event: this.event
    });
  }

  ///////////////////
  // Button Events //
  ///////////////////
  requestBountyButtonPressed() {
    let alert = Alert.create({
      title: 'Bounty Requested',
      subTitle: 'You have added a bounty of 200 points to this event.',
      buttons: ['Ok']
    });

    this.nav.present(alert);
  }

  addSetTimesButtonPressed() {
    this.addSetTimes();
  }

  ////////////////////////////
  // Set Times Modification //
  ////////////////////////////
  addSetTimes() {
    this.data.resetData();
    this.goToInsertSetTimes();
  }

  getTotalArtists(setTimes: SetTimes) : number {
    return this.search.getTotalArtists(setTimes);
  }
}
