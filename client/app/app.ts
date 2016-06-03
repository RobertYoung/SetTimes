import {ViewChild, Type, provide} from '@angular/core';
import {Http} from '@angular/http';
import {App, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {LoginPage} from './pages/login/login.page';
import {AuthService} from './services/auth/auth.service';
import {EventListPage} from './pages/event-list/event-list.page';
import {SearchService} from './services/helpers/search.service';

@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig(), http);
      },
      deps: [Http]
    }),
    AuthService,
    SearchService
  ]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // rootPage: any = HelloIonicPage;
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    private menu: MenuController,
    private auth: AuthService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Events', component: EventListPage },
      { title: 'Artists', component: EventListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.auth.startupTokenRefresh();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  logout() {
    this.auth.logout();
    this.menu.close();
    this.nav.setRoot(LoginPage);
  }
}
