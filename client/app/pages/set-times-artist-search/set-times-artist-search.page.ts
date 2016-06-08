import {OnInit} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {SetTimesService} from './../../services/set-times/set-times.service';
import {SpotifyArtist} from '../../models/SpotifyArtist';

// import * as automapper from 'automapper-ts';

@Page({
  templateUrl: 'build/pages/set-times-artist-search/set-times-artist-search.page.html'
})

export class SetTimesArtistSearchPage implements OnInit {

  searchQuery: string;
  listOfArtists: Array<SpotifyArtist>;
  errorMessage: string;

  constructor(private nav: NavController, navParams: NavParams, public setTimesService: SetTimesService) {
    // var objA = { prop1: 'From A', prop2: 'From A too', prop3: 'Also from A (really)' };
    //
    // automapper
    //     .createMap('sourceType', 'destinationType')
    //     .forMember('prop1', function (opts) { opts.mapFrom('prop2'); })
    //     .forMember('prop2', function (opts) { opts.ignore(); })
    //     .forSourceMember('prop3', function (opts) { opts.ignore(); })
    //     .forMember('prop4', function () { return 12; })
    //
    // var objB = automapper.map('sourceType', 'destinationType', objA);
  }

  ngOnInit() {
    this.initializeItems();
  }

  initializeItems() {
    this.listOfArtists = [];
  }

  searchArtist(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.setTimesService.searchArtist(q)
              .subscribe(
                       artists => {
                         this.listOfArtists = artists.items
                       },
                       error =>  this.errorMessage = <any>error);
  }
}
