import {Page, NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {AuthService} from '../../providers/auth/auth.service';
import {EventListPage} from '../event-list/event-list.page';

@Component({
  templateUrl: 'build/pages/login/login.page.html'
})
export class LoginPage {
  auth: AuthService;

  constructor(private nav: NavController, auth: AuthService) {
    this.auth = auth;

    if (this.auth.authenticated()) {
      this.goToEvents();
    }
  }

  goToEvents() : void {
    this.nav.setRoot(EventListPage);
  }
}
