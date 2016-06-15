import {OnInit, Component} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {Room} from './../../models/Room';
import {SetTimes} from './../../models/SetTimes';
import {Artist} from './../../models/Artist';
import {SetTimesArtistSearchPage} from '../set-times-artist-search/set-times-artist-search.page';
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';
import {SetTimesNavigationService} from '../../providers/set-times/set-times.navigation.service';
import {SetTimesInput} from './../common/set-times-input';
import {SaveButtons} from '../../components/save-buttons/save-buttons.component';

@Component({
  templateUrl: 'build/pages/set-times-artist/set-times-artist.page.html',
  directives: [SaveButtons]
})

export class SetTimesArtistPage extends SetTimesInput implements OnInit {

  constructor(private nav: NavController, navParams: NavParams, public data: SetTimesDataService, private setTimesNavigation: SetTimesNavigationService) {
    super();

    this.editMode = navParams.data.editMode;
  }

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
    if (this.editMode) {
      this.editArtistInRoom();
    }else{
      this.addArtistToRoom();
    }

    this.goToRoomPage();
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

  ////////////////////
  // Artist Methods //
  ////////////////////
  addArtistToRoom() {
    this.data.addArtistToRoom();
  }

  editArtistInRoom() {
    this.data.editArtistInRoom();
  }
}
