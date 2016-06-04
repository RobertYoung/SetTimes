import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {SetTimes} from './../../models/SetTimes';

@Page({
  templateUrl: 'build/pages/set-times/set-times.page.html'
})

export class SetTimesInsertPage {
  event: Event;
  setTimes: SetTimes;

  constructor(private nav: NavController, navParams: NavParams, search: SearchService) {
    this.event = navParams.data.event;
    this.setTimes = navParams.data.setTimes;

    console.log(this.setTimes);
  }

}
