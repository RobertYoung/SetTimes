import {OnInit} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {Room} from './../../models/Room';
import {SetTimes} from './../../models/SetTimes';
import {Artist} from './../../models/Artist';
import {SetTimesArtistSearchPage} from '../set-times-artist-search/set-times-artist-search.page';
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';

@Page({
  templateUrl: 'build/pages/set-times-artist/set-times-artist.page.html'
})

export class SetTimesArtistPage implements OnInit {

  constructor(private nav: NavController, navParams: NavParams, public data: SetTimesDataService) { }

  ngOnInit() {

  }

  ////////////////
  // Navigation //
  ////////////////
  goToArtistSearchPage() {
    this.nav.push(SetTimesArtistSearchPage);
  }

  goToRoomPage() {
    this.nav.pop();
  }

  ///////////////////
  // Button Events //
  ///////////////////
  saveButtonPressed() {
    console.log("Save button pressed");
    this.addArtistToRoom()
    this.goToRoomPage();
  }

  submitButtonPressed() {
    console.log("Submit button pressed");
  }

  previewButtonPressed() {
    console.log("Preview button pressed");
  }

  ////////////////////
  // Artist Methods //
  ////////////////////
  addArtistToRoom() {
    this.data.addArtistToRoom();
  }
}
