import {OnInit} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';
import {Room} from './../../models/Room';
import {SetTimes} from './../../models/SetTimes';
import {Artist} from './../../models/Artist';
import {SetTimesArtistSearchPage} from '../set-times-artist-search/set-times-artist-search.page';

@Page({
  templateUrl: 'build/pages/set-times-artist/set-times-artist.page.html'
})

export class SetTimesArtistPage implements OnInit {
  event: Event;
  setTimes: SetTimes;
  room: Room;
  artist: Artist;

  constructor(private nav: NavController, navParams: NavParams) {
    this.event = navParams.data.event;
    this.setTimes = navParams.data.setTimes || new SetTimes();
    this.room = navParams.data.room || new Room();
    this.artist = navParams.data.artist || new Artist();
  }

  ngOnInit() {

  }

  goToArtistSearchPage() {
    this.nav.push(SetTimesArtistSearchPage);
  }
}
