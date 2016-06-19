import {ViewChild, Type, provide, Component} from '@angular/core';
import {Http} from '@angular/http';
import {Platform, MenuController, Nav, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {LoginComponent} from './pages/login/login';
import {AuthService} from './providers/auth/auth.service';
import {SetTimesDataService} from './providers/set-times/set-times.data.service';
import {SetTimesAPIService} from './providers/set-times/set-times.api.service';
import {EventListComponent} from './pages/event-list/event-list';
import {SearchService} from './providers/helpers/search.service';
import {ArtistCardComponent} from './components/artist-card/artist-card.component';
import {SaveButtonsComponent} from './components/save-buttons/save-buttons.component';
import {FacebookAPIService} from './providers/facebook/facebook.api.service';
import * as automapper from 'automapper-ts';

@Component({
  templateUrl: 'build/app.html',
  directives: [ArtistCardComponent, SaveButtonsComponent]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // rootPage: any = HelloIonicPage;
  rootPage: any = LoginComponent; //EventListPage
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
      { title: 'Events', component: EventListComponent },
      { title: 'Artists', component: EventListComponent },
      { title: 'Leaderboard', component: EventListComponent }
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
    this.nav.setRoot(LoginComponent);
  }

  mapper() {
    // Soundcloud to Artist
    automapper
      .createMap('SoundcloudArtist', 'Artist')
      .forMember('name', function (opts) { opts.mapFrom('username'); })
      .forMember('image_url', function (opts) { opts.mapFrom('avatar_url'); })
      .forMember('external_urls.spotify', function (opts) { opts.mapFrom('permalink_url'); })
      .ignoreAllNonExisting();

    automapper
      .createMap('FBEvent', 'Event')
      .forMember('name', function (opts) { opts.mapFrom('name'); })
      .forMember('description', function (opts) { opts.mapFrom('description'); })
      .forMember('facebook_id', function (opts) { opts.mapFrom('id'); })
      .forMember('start_time', function (opts) { opts.mapFrom('start_time'); })
      .forMember('end_time', function (opts) { opts.mapFrom('end_time'); })
      .forMember('venue', function (opts) { opts.mapFrom('place.name'); })
      .forMember('image_url', function (opts) { opts.mapFrom('cover.source'); })
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

// Pass the main app component as the first argument
// Pass any providers for your app in the second argument
// Set any config for your app as the third argument:
// http://ionicframework.com/docs/v2/api/config/Config/

ionicBootstrap(MyApp, [
  provide(AuthHttp, {
    useFactory: (http) => {
      return new AuthHttp(new AuthConfig(), http);
    },
    deps: [Http]
  }),
  AuthService,
  SearchService,
  SetTimesDataService,
  SetTimesAPIService,
  FacebookAPIService
], {
  tabbarPlacement: 'bottom'
});
