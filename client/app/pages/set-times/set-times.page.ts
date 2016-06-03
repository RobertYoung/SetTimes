import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {SetTimes} from './../../models/SetTimes';

@Page({
  templateUrl: 'build/pages/set-times/set-times.page.html'
})

export class SetTimesPage {
  event: Event;
  setTimesId: number;
  setTimes: SetTimes;

  constructor(private nav: NavController, navParams: NavParams) {
    this.event = navParams.data.event;
    this.setTimesId = navParams.data.setTimesId;
    this.event
  }

}
