import {Injectable, ViewChild} from '@angular/core';
import {NavController, IonicApp} from 'ionic-angular';
import {SetTimesPage} from '../../pages/set-times/set-times.page';
import {SetTimes} from '../../models/SetTimes';
import {Event} from '../../models/Event';

@Injectable()
export class SetTimesNavigationService {
  nav: NavController;

  constructor (private app: IonicApp) {
    this.nav = this.app.getActiveNav();
  }

  goToSetTimesPreview(event: Event, setTimes: SetTimes) {
    this.nav.push(SetTimesPage, {
      event: event,
      setTimes: setTimes
    });
  }
}
