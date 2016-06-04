import {OnInit} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {Room} from './../../models/Room';
import {SetTimes} from './../../models/SetTimes';

@Page({
  templateUrl: 'build/pages/set-times-room/set-times-room.page.html'
})

export class SetTimesRoomPage implements OnInit {
  event: Event;
  setTimes: SetTimes;
  room: Room;

  constructor(private nav: NavController, navParams: NavParams) {
    this.event = navParams.data.event;
    this.setTimes = navParams.data.setTimes || new SetTimes();
    this.room = navParams.data.room || new Room();

    //this.setupDefaultValues();
  }

  ngOnInit() {
    this.setupDefaultValues();
  }

  setupDefaultValues() {
    if (!this.room.startTime) {
      //this.room.startTime = this.event.startTime;
      this.room.startTime = moment().format();
      // this.room.startTime = '1991-10-10';
    }

    console.log(this.room.startTime);
  }
}
