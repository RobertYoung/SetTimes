import {OnInit} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {SetTimesService} from './../../services/set-times/set-times.service';

@Page({
  templateUrl: 'build/pages/set-times-artist-search/set-times-artist-search.page.html'
})

export class SetTimesArtistSearchPage implements OnInit {

  searchQuery: string;
  listOfArtists: any;
  errorMessage: string;

  constructor(private nav: NavController, navParams: NavParams, public setTimesService: SetTimesService) {

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
                         console.log(this.listOfArtists);
                       },
                       error =>  this.errorMessage = <any>error);
  }
}
