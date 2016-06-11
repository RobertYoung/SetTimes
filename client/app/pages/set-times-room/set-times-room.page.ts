import {OnInit} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {Room} from './../../models/Room';
import {Artist} from './../../models/Artist';
import {SetTimes} from './../../models/SetTimes';
import {SetTimesArtistPage} from '../set-times-artist/set-times-artist.page';
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';
import * as moment from 'moment';

@Page({
  templateUrl: 'build/pages/set-times-room/set-times-room.page.html'
})

export class SetTimesRoomPage implements OnInit {

  constructor(private nav: NavController, navParams: NavParams, public data: SetTimesDataService) {

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
    this.nav.push(SetTimesArtistPage, {
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

    if (this.data.editMode) {

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
  }

  deleteButtonPressed() {
    console.log("Delete button pressed");
  }
}
