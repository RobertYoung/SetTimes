import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit, Component} from '@angular/core';
import {Event} from './../../models/Event';
import {SetTimes} from './../../models/SetTimes';
import {Room} from './../../models/Room';
import {SetTimesRoomPage} from './../set-times-room/set-times-room.page'
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';
import {SetTimesNavigationService} from '../../providers/set-times/set-times.navigation.service';
import {SetTimesInput} from './../common/set-times-input';

@Component({
  templateUrl: 'build/pages/set-times-insert/set-times-insert.page.html'
})

export class SetTimesInsertPage extends SetTimesInput{

  constructor(private nav: NavController, navParams: NavParams, public data: SetTimesDataService, private setTimesNavigation: SetTimesNavigationService) {
    super();

    this.data.event = navParams.data.event;
    this.editMode = navParams.data.editMode;
    this.data.setTimes.createdBy.username = "TEST USER";
  }

  ////////////////
  // Navigation //
  ////////////////
  goToAddRoomPage(editMode?: boolean) {
    this.nav.push(SetTimesRoomPage, {
      editMode: editMode
    });
  }

  goToEventDetails() {
    this.nav.pop();
  }

  ///////////////////
  // Button Events //
  ///////////////////
  saveButtonPressed() {
    console.log("Save button pressed");
    if (this.editMode) {

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
    this.setTimesNavigation.goToSetTimesPreview(this.data.event, this.data.setTimes);
  }

  deleteButtonPressed() {
    console.log("Delete button pressed");
  }

  editRoomButtonPressed(room: Room) {
    this.data.setRoom(room);
    this.goToAddRoomPage(true);
  }

  insertRoomButtonPressed() {
    this.data.resetRoom();
    this.goToAddRoomPage();
  }
}
