import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit, Component} from '@angular/core';
import {Event} from './../../models/set-times/Event';
import {Room} from './../../models/set-times/Room';
import {Artist} from './../../models/set-times/Artist';
import {SetTimes} from './../../models/set-times/SetTimes';
import {SetTimesArtistComponent} from '../set-times-artist/set-times-artist';
import {SetTimesComponent} from '../set-times/set-times';
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';
import {SetTimesInput} from './../common/set-times-input';
import {SaveButtonsComponent} from '../../components/save-buttons/save-buttons.component';
import * as moment from 'moment';

@Component({
  templateUrl: 'build/pages/set-times-room/set-times-room.html',
  directives: [SaveButtonsComponent]
})
export class SetTimesRoomComponent extends SetTimesInput implements OnInit {

  constructor(private nav: NavController, navParams: NavParams, public data: SetTimesDataService) {
    super();

    this.editMode = navParams.data.editMode;
  }

  ngOnInit() {
    this.setupDefaultValues();
  }

  setupDefaultValues() {
    if (!this.data.room.startTime) {
      this.data.room.startTime = moment().format();
    }

    console.log(this.data.room.startTime);
  }

  ////////////////
  // Navigation //
  ////////////////
  goToAddArtistPage(editMode?: boolean) {
    this.nav.push(SetTimesArtistComponent, {
      editMode: editMode
    });
  }

  goToSetTimesPage() {
    this.nav.pop();
  }

  ///////////////////
  // Button Events //
  ///////////////////
  addArtistButtonPressed() {
    this.data.resetArtist();
    this.goToAddArtistPage();
  }

  editArtistButtonPressed(artist: Artist) {
    this.data.setArtist(artist);
    this.goToAddArtistPage(true);
  }

  ///////////////////
  // Button Events //
  ///////////////////
  saveButtonPressed() {
    console.log("Save button pressed");

    if (this.editMode) {

    }else{
      this.data.addRoomToSetTimes();
    }

    this.goToSetTimesPage();
  }

  submitButtonPressed() {
    console.log("Submit button pressed");
  }

  previewButtonPressed() {
    console.log("Preview button pressed");
    this.nav.push(SetTimesComponent, {
      event: this.data.event,
      setTimes: this.data.setTimes
    });
  }

  deleteButtonPressed() {
    console.log("Delete button pressed");
  }
}
