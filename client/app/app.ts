import {ViewChild, Type, provide} from '@angular/core';
import {Http} from '@angular/http';
import {App, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {LoginPage} from './pages/login/login.page';
import {AuthService} from './providers/auth/auth.service';
import {SetTimesDataService} from './providers/set-times/set-times.data.service';
import {SetTimesAPIService} from './providers/set-times/set-times.api.service';
import {EventListPage} from './pages/event-list/event-list.page';
import {SearchService} from './providers/helpers/search.service';
import {ArtistCard} from './components/artist-card/artist-card.component';
import * as automapper from 'automapper-ts';

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
    SearchService,
    SetTimesDataService,
    SetTimesAPIService
  ],
  directives: [ArtistCard]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // rootPage: any = HelloIonicPage;
  rootPage: any = LoginPage; //EventListPage
  pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    private menu: MenuController,
    private auth: AuthService
  ) {
    this.initializeApp();
    this.mapper();

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

  mapper() {
    // Soundcloud to Artist
    automapper
      .createMap('SoundcloudArtist', 'Artist')
      .forMember('name', function (opts) { opts.mapFrom('username'); })
      .forMember('imageUrl', function (opts) { opts.mapFrom('avatar_url'); })
      .forMember('external_urls.spotify', function (opts) { opts.mapFrom('permalink_url'); })
      .ignoreAllNonExisting();

    // Spotify to Artist
    // automapper
    //   .createMap('SpotifyArtist', 'Artist')
    //   .convertUsing(function (resolutionContext : automapper.IResolutionContext) {
    //     return {
    //       imageUrl: resolutionContext.sourceValue.images.length ? resolutionContext.sourceValue.images[0].url : '',
    //       name: resolutionContext.sourceValue.name,
    //       external_urls: {
    //         spotify: resolutionContext.sourceValue.external_urls.spotify
    //       }
    //     }
    //   });
      // artist.images?.length ? artist.images[0].url : ''
  }
}
