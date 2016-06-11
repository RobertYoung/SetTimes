import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {SetTimes} from './../../models/SetTimes';
import {SetTimesRoomPage} from './../set-times-room/set-times-room.page'
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';

@Page({
  templateUrl: 'build/pages/set-times-insert/set-times-insert.page.html'
})

export class SetTimesInsertPage {

  constructor(private nav: NavController, navParams: NavParams, public data: SetTimesDataService) {
    this.data.event = navParams.data.event;
    this.data.editMode = navParams.data.editMode;
    this.data.setTimes.createdBy.username = "TEST USER";
  }

  ////////////////
  // Navigation //
  ////////////////
  goToSetTimesInsertRoom() {
    this.nav.push(SetTimesRoomPage);
  }

  goToEventDetails() {
    this.nav.pop();
  }

  ///////////////////
  // Button Events //
  ///////////////////
  saveButtonPressed() {
    console.log("Save button pressed");
    if (this.data.editMode) {

    }else{
      this.data.addSetTimesToEvent();
    }

    this.goToEventDetails();
  }

  submitButtonPressed() {
    console.log("Submit button pressed");
  }

  previewButtonPressed() {
    console.log("Preview button pressed");
  }

  deleteButtonPressed() {
    console.log("Delete button pressed");
  }
}
