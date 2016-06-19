import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/set-times/event';
import {EventInsertDetailsComponent} from '../event-insert-details/event-insert-details';

@Component({
  templateUrl: 'build/pages/event-insert-type/event-insert-type.html'
})

export class EventInsertTypeComponent {
  eventListView: ViewController;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.eventListView = this.navParams.data.eventListView;
  }

  ////////////////
  // Navgiation //
  ////////////////
  goToEventInsertDetails() {
    this.nav.push(EventInsertDetailsComponent, {
      eventListView: this.eventListView
    });
  }
}
