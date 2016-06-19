import {Page, NavController, NavParams, Alert} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/set-times/event';
import {Room} from './../../models/set-times/room';
import {SetTimes} from './../../models/set-times/set-times';
import {SetTimesComponent} from './../set-times/set-times';
import {SetTimesInsertComponent} from './../set-times-insert/set-times-insert';
import {SearchService} from '../../providers/helpers/search.service';
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';

@Component({
  templateUrl: 'build/pages/event-detail/event-detail.html'
})
export class EventDetailComponent {
  editMode: boolean;
  event: Event;

  constructor(private nav: NavController, private navParams: NavParams, private search: SearchService,
              private data: SetTimesDataService) {
    this.event = navParams.data.event;
  }

  ////////////////
  // Navigation //
  ////////////////
  goToSetTimes(setTimes: SetTimes) {
    this.nav.push(SetTimesComponent, {
      event: this.event,
      setTimes: setTimes
    });
  }

  goToInsertSetTimes() {
    this.nav.push(SetTimesInsertComponent, {
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
