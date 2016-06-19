import {OnInit, Component} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/set-times/Event';
import {Room} from './../../models/set-times/Room';
import {SetTimes} from './../../models/set-times/SetTimes';
import {Artist} from './../../models/set-times/Artist';
import {SetTimesArtistSearchComponent} from '../set-times-artist-search/set-times-artist-search';
import {SetTimesComponent} from '../set-times/set-times';
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';
import {SetTimesInput} from './../common/set-times-input';
import {SaveButtonsComponent} from '../../components/save-buttons/save-buttons.component';

@Component({
  templateUrl: 'build/pages/set-times-artist/set-times-artist.html',
  directives: [SaveButtonsComponent]
})

export class SetTimesArtistComponent extends SetTimesInput implements OnInit {

  constructor(private nav: NavController, navParams: NavParams, public data: SetTimesDataService) {
    super();

    this.editMode = navParams.data.editMode;
  }

  ngOnInit() {

  }

  ////////////////
  // Navigation //
  ////////////////
  goToArtistSearchPage() {
    this.nav.push(SetTimesArtistSearchComponent);
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

    this.nav.push(SetTimesComponent, {
      event: this.data.event,
      setTimes: this.data.set_times
    });
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
