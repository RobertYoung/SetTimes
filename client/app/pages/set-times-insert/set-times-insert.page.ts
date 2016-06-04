import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {SetTimes} from './../../models/SetTimes';

@Page({
  templateUrl: 'build/pages/set-times-insert/set-times-insert.page.html'
})

export class SetTimesInsertPage {
  event: Event;
  setTimes: SetTimes;
  points: number = 200;

  constructor(private nav: NavController, navParams: NavParams) {
    this.event = navParams.data.event;
  }

}
