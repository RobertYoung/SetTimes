import {Page} from 'ionic-angular';
import {AuthService} from '../../services/auth/auth';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  auth: AuthService;
  constructor(auth: AuthService) {
    this.auth = auth;
  }
}
