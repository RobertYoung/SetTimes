import {OnInit, Component} from '@angular/core';
import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {SetTimesAPIService} from './../../providers/set-times/set-times.api.service';
import {SpotifyArtist} from '../../models/SpotifyArtist';
import {Artist} from '../../models/Artist';
import {SetTimesDataService} from '../../providers/set-times/set-times.data.service';
import {ArtistCardComponent} from '../../components/artist-card/artist-card.component';
import * as automapper from 'automapper-ts';

// import * as automapper from 'automapper-ts';

@Component({
  templateUrl: 'build/pages/set-times-artist-search/set-times-artist-search.html',
  directives: [ArtistCardComponent]
})

export class SetTimesArtistSearchComponent implements OnInit {
  searchQuery: string;
  listOfArtists: Array<SpotifyArtist>;
  errorMessage: string;
  // artist: Artist;

  constructor(private nav: NavController, navParams: NavParams, public setTimesService: SetTimesAPIService, public data: SetTimesDataService, public view: ViewController) {
    // this.artist = navParams.data.artist || new Artist();
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
                       data => {
                        let spotify = <Array<Artist>>data.spotify.items.map((spotify) => {
                          const imageUrl = spotify.images.length ? spotify.images[0].url : '';
                          const artist = <Artist>spotify;
                          artist.imageUrl = imageUrl;
                          // return automapper.map("SpotifyArtist", "Artist", spotify);
                          return spotify;
                        });
                        let soundcloud = <Array<Artist>>data.soundcloud.map((soundcloud) => {
                          return automapper.map("SoundcloudArtist", "Artist", soundcloud)
                        });

                        console.log(spotify);
                        console.log(soundcloud);

                        this.listOfArtists = spotify.concat(soundcloud);
                       },
                       error =>  this.errorMessage = <any>error);
  }

  artistSelected(artist) {
    console.log("ARTIST SELCTED");
    // this.view.artist = artist;
    this.data.artist = artist;
    let test = this.nav.getPrevious(this.view)
    test.data.test = 1;
    this.nav.popTo(test);
  }
}
