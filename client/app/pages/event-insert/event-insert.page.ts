import {Page, NavController, NavParams} from 'ionic-angular';
import {Component} from '@angular/core';
import {Event} from './../../models/Event';

@Component({
  templateUrl: 'build/pages/event-insert/event-insert.page.html'
})

export class EventInsertPage {

  constructor(private nav: NavController, navParams: NavParams) {

  }

}
