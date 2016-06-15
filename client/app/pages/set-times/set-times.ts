import {Page, NavController, NavParams} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/Event';
import {SetTimes} from './../../models/SetTimes';
import {SearchService} from '../../providers/helpers/search.service';
import {ArtistCardComponent} from '../../components/artist-card/artist-card.component';

@Component({
  templateUrl: 'build/pages/set-times/set-times.html',
  directives: [ArtistCardComponent]
})
export class SetTimesComponent {
  event: Event;
  setTimes: SetTimes;

  constructor(private nav: NavController, navParams: NavParams, search: SearchService) {
    this.event = navParams.data.event;
    this.setTimes = navParams.data.setTimes;

    console.log(this.setTimes);
  }

}