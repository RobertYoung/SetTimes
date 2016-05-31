import {Page, NavController} from 'ionic-angular';
import {AuthService} from '../../services/auth/auth';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';

@Page({
  templateUrl: 'build/pages/login/login.html'
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
    this.nav.setRoot(HelloIonicPage);
  }
}
