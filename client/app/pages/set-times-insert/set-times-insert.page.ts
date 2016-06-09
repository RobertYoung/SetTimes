import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {SetTimes} from './../../models/SetTimes';
import {SetTimesRoomPage} from './../set-times-room/set-times-room.page'
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';

@Page({
  templateUrl: 'build/pages/set-times-insert/set-times-insert.page.html'
})

export class SetTimesInsertPage {
  // event: Event;
  // setTimes: SetTimes;
  // points: number = 200;


  constructor(private nav: NavController, navParams: NavParams, public data: SetTimesDataService) {
    this.data.event = navParams.data.event;
  }

  goToSetTimesInsertRoom() {
    this.nav.push(SetTimesRoomPage);
    // this.nav.push(SetTimesRoomPage, {
    //   event: this.data.event,
    //   setTimes: this.data.setTimes
    // });
  }
}
