import {Page, NavController, NavParams} from 'ionic-angular';
import {Event} from './../../models/Event';

@Page({
  templateUrl: 'build/pages/event-insert/event-insert.page.html'
})

export class EventInsertPage {

  constructor(private nav: NavController, navParams: NavParams) {

  }

}
