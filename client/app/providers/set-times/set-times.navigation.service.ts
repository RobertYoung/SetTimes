import {Injectable, ViewChild} from '@angular/core';
import {NavController, App} from 'ionic-angular';
import {SetTimesPage} from '../../pages/set-times/set-times.page';
import {SetTimes} from '../../models/SetTimes';
import {Event} from '../../models/Event';

@Injectable()
export class SetTimesNavigationService {
  nav: NavController;

  constructor (private app: App) {
    this.nav = this.app.getActiveNav();
  }

  goToSetTimesPreview(event: Event, setTimes: SetTimes) {
    this.nav.push(SetTimesPage, {
      event: event,
      setTimes: setTimes
    });
  }
}
