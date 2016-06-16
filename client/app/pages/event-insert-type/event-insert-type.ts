import {Page, NavController, NavParams} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/Event';
import {EventInsertDetailsComponent} from '../event-insert-details/event-insert-details';

@Component({
  templateUrl: 'build/pages/event-insert-type/event-insert-type.html'
})

export class EventInsertTypeComponent {

  constructor(private nav: NavController, private navParams: NavParams) {

  }

  ////////////////
  // Navgiation //
  ////////////////
  goToEventInsertDetails() {
    this.nav.push(EventInsertDetailsComponent);
  }
}
