import {Page, NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {AuthService} from '../../providers/auth/auth.service';
import {EventListComponent} from '../event-list/event-list';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginComponent {
  auth: AuthService;

  constructor(private nav: NavController, auth: AuthService) {
    this.auth = auth;

    if (this.auth.authenticated()) {
      this.goToEvents();
    }
  }

  goToEvents() : void {
    this.nav.setRoot(EventListComponent);
  }
}
