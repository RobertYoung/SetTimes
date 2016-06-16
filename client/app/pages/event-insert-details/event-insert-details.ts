import {Page, NavController, NavParams} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/Event';

@Component({
  templateUrl: 'build/pages/event-insert-details/event-insert-details.html'
})

export class EventInsertDetailsComponent {
  event: Event;

  constructor(private nav: NavController, navParams: NavParams) {
    this.event = navParams.data.event || new Event();
  }

}
