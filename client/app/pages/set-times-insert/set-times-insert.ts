import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit, Component} from '@angular/core';
import {Event} from './../../models/set-times/event';
import {SetTimes} from './../../models/set-times/set-times';
import {Room} from './../../models/set-times/room';
import {SetTimesRoomComponent} from './../set-times-room/set-times-room'
import {SetTimesComponent} from './../set-times/set-times'
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';
import {SetTimesInput} from './../common/set-times-input';
import {SaveButtonsComponent} from '../../components/save-buttons/save-buttons.component';

@Component({
  templateUrl: 'build/pages/set-times-insert/set-times-insert.html',
  directives: [SaveButtonsComponent]
})

export class SetTimesInsertComponent extends SetTimesInput{

  constructor(private nav: NavController, navParams: NavParams, public data: SetTimesDataService) {
    super();

    this.data.event = navParams.data.event;
    this.editMode = navParams.data.editMode;
    this.data.set_times.created_by.username = "TEST USER";
  }

  ////////////////
  // Navigation //
  ////////////////
  goToAddRoomPage(editMode?: boolean) {
    this.nav.push(SetTimesRoomComponent, {
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

    this.nav.push(SetTimesComponent, {
      event: this.data.event,
      setTimes: this.data.set_times
    });
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
